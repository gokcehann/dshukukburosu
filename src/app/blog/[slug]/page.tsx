import { mockArticles, mockLawyers } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = mockArticles.find(a => a.slug === resolvedParams.slug);
  if (!article) return {};
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    }
  };
}

export function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = mockArticles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const author = mockLawyers.find(l => l.id === article.authorId);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": author ? author.name : "D.S. Hukuk Bürosu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "D.S. Hukuk Bürosu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dshukuk.com/logo.png"
      }
    }
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <div className="flex items-center text-sm text-text-light mb-4 gap-4">
            <span className="bg-primary text-white px-3 py-1 rounded-sm">{article.category}</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR')}</span>
            <span>{article.readTime} okuma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-6">
            {article.title}
          </h1>
          
          {author && (
            <div className="flex items-center gap-4 mt-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-text-dark">{author.name}</p>
                <p className="text-sm text-text-light">{author.title}</p>
              </div>
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none text-text-dark">
          <p className="lead text-xl text-text-light font-medium italic mb-8 border-l-4 border-accent pl-4">
            {article.excerpt}
          </p>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </>
  );
}
