export interface IArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorId: string;
  publishedAt: string;
  category: string;
  readTime: string;
}

export interface ILawyer {
  id: string;
  name: string;
  title: string;
  image: string;
  practiceAreas: string[];
  education: string[];
  barNumber: string;
  email: string;
  phone?: string;
  linkedin?: string;
}

export interface IService {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface IContactMessage {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  createdAt?: string;
}

export interface IGoogleReview {
  id: string;
  authorName: string;
  authorInitials: string;
  authorRole?: string;
  avatarBgColor?: string;
  rating: number;
  relativeTime: string;
  text: string;
  serviceCategory?: string;
  reply?: {
    author: string;
    date: string;
    text: string;
  };
}

export interface IGoogleReviewsSummary {
  averageRating: number;
  totalReviews: number;
  starsCount: { [key: number]: number };
  googleMapsUrl: string;
  googleReviewWriteUrl: string;
}

