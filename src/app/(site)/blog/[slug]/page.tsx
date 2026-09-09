import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

// Sanity'den tek bir makaleyi slug (URL) değerine göre çeken asenkron fonksiyon
async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      author,
      publishedAt,
      body,
      mainImage
    }
  `;
  return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return notFound(); // Eğer slug yanlışsa 404 sayfasına yönlendirir
  }

  return (
    <div className="bg-primary min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/blog" className="text-accent hover:text-primary transition-colors text-sm font-medium mb-8 inline-block">
          &larr; Makalelere Dön
        </Link>

        <article className="bg-white p-8 sm:p-12 rounded-lg shadow-sm border border-gray-100">
          
          {post.mainImage && (
            <div className="mb-10 rounded-lg overflow-hidden h-64 sm:h-96 w-full relative">
              <img 
                src={urlForImage(post.mainImage)?.url() as string} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-10 text-center border-b border-gray-100 pb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-500 font-medium">
              <span>{post.author || "D&S Hukuk"}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('tr-TR')}</span>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary transition-colors prose-img:rounded-lg">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>Bu makalenin içeriği henüz eklenmemiş.</p>
            )}
          </div>
        </article>

      </div>
    </div>
  );
}
