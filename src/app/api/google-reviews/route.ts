import { NextResponse } from 'next/server';
import { mockGoogleReviews, googleReviewsSummary } from '@/data/reviews';
import { IGoogleReview, IGoogleReviewsSummary } from '@/types';

// Cache revalidation time: 1 hour (3600 seconds) to avoid unnecessary Google API quota usage
export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If credentials are not set, return mock reviews with status info
  if (!apiKey || !placeId) {
    return NextResponse.json({
      isLive: false,
      message: 'GOOGLE_PLACES_API_KEY veya GOOGLE_PLACE_ID .env.local dosyasına eklenmediğinde örnek veriler gösterilir.',
      summary: googleReviewsSummary,
      reviews: mockGoogleReviews,
    });
  }

  try {
    // 1. Fetch from Google Places API (New)
    const newApiUrl = `https://places.googleapis.com/v1/places/${placeId}?languageCode=tr`;
    const newApiResponse = await fetch(newApiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews,googleMapsUri',
      },
      next: { revalidate: 3600 },
    });

    if (newApiResponse.ok) {
      const data = await newApiResponse.json();
      const realReviews: IGoogleReview[] = (data.reviews || []).map((rev: any, index: number) => {
        const name = rev.authorAttribution?.displayName || 'Google Kullanıcısı';
        const initials = name
          .split(' ')
          .map((n: string) => n[0])
          .slice(0, 2)
          .join('')
          .toUpperCase() || 'GK';

        return {
          id: rev.name || `review-${index}`,
          authorName: name,
          authorInitials: initials,
          authorRole: 'Google Doğrulanmış Yorum',
          rating: rev.rating || 5,
          relativeTime: rev.relativePublishTimeDescription || '',
          text: rev.text?.text || '',
          serviceCategory: 'Google Yorumu',
          avatarPhotoUrl: rev.authorAttribution?.photoUri,
        };
      });

      const summary: IGoogleReviewsSummary = {
        averageRating: data.rating || 5.0,
        totalReviews: data.userRatingCount || realReviews.length,
        starsCount: { 5: data.userRatingCount || realReviews.length, 4: 0, 3: 0, 2: 0, 1: 0 },
        googleMapsUrl: data.googleMapsUri || googleReviewsSummary.googleMapsUrl,
        googleReviewWriteUrl: data.googleMapsUri || googleReviewsSummary.googleReviewWriteUrl,
      };

      return NextResponse.json({
        isLive: true,
        summary,
        reviews: realReviews,
      });
    }

    // 2. Fallback to Legacy Google Places Details API
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total,url&language=tr&key=${apiKey}`;
    const legacyResponse = await fetch(legacyUrl, { next: { revalidate: 3600 } });
    const legacyData = await legacyResponse.json();

    if (legacyData.status === 'OK' && legacyData.result) {
      const result = legacyData.result;
      const realReviews: IGoogleReview[] = (result.reviews || []).map((rev: any, index: number) => {
        const name = rev.author_name || 'Google Kullanıcısı';
        const initials = name
          .split(' ')
          .map((n: string) => n[0])
          .slice(0, 2)
          .join('')
          .toUpperCase() || 'GK';

        return {
          id: `rev-${index}`,
          authorName: name,
          authorInitials: initials,
          authorRole: 'Google Doğrulanmış Yorum',
          rating: rev.rating || 5,
          relativeTime: rev.relative_time_description || '',
          text: rev.text || '',
          serviceCategory: 'Google Yorumu',
          avatarPhotoUrl: rev.profile_photo_url,
        };
      });

      const summary: IGoogleReviewsSummary = {
        averageRating: result.rating || 5.0,
        totalReviews: result.user_ratings_total || realReviews.length,
        starsCount: { 5: result.user_ratings_total || realReviews.length, 4: 0, 3: 0, 2: 0, 1: 0 },
        googleMapsUrl: result.url || googleReviewsSummary.googleMapsUrl,
        googleReviewWriteUrl: result.url || googleReviewsSummary.googleReviewWriteUrl,
      };

      return NextResponse.json({
        isLive: true,
        summary,
        reviews: realReviews,
      });
    }

    // If both failed, return fallback with error info
    return NextResponse.json({
      isLive: false,
      error: legacyData.error_message || 'Google Places API yanıt vermedi.',
      summary: googleReviewsSummary,
      reviews: mockGoogleReviews,
    });
  } catch (error: any) {
    return NextResponse.json({
      isLive: false,
      error: error?.message || 'Bir hata oluştu.',
      summary: googleReviewsSummary,
      reviews: mockGoogleReviews,
    });
  }
}
