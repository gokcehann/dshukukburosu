import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

// Sanity'den tüm makaleleri çeken asenkron fonksiyon
async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      mainImage,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    }
  `;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className="bg-primary min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Makaleler</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hukuki gelişmeler, emsal kararlar ve uzmanlık alanlarımıza dair kaleme aldığımız güncel yazılar.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            Henüz yayınlanmış bir makale bulunmamaktadır.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug?.current || ''}`} key={post._id} className="group">
                <article className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  
                  {/* Görsel Alanı */}
                  <div className="h-48 bg-gray-200 w-full overflow-hidden relative">
                    {post.mainImage ? (
                      <img 
                        src={urlForImage(post.mainImage)?.url() as string} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#736A62]/10 flex items-center justify-center text-[#736A62]">
                        <span className="text-sm tracking-widest uppercase">Görsel Yok</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-accent text-xs font-semibold mb-2">
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('tr-TR')}
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                      {post.excerpt !== "..." && post.excerpt !== null ? post.excerpt : "Bu makale için bir özet bulunmuyor..."}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-400 font-medium">
                      {post.author || "D&S Hukuk"}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
