import { mockArticles } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Hukuki Gelişmeler",
  description: "D.S. Hukuk Bürosu uzman avukatları tarafından hazırlanan güncel hukuki makaleler ve yasa değerlendirmeleri.",
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-primary py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Blog & Haberler</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Hukuk dünyasındaki güncel gelişmeler, yasa değişiklikleri ve emsal kararlar hakkında uzman incelemeleri.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <Card key={article.id} hover className="flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-2xl opacity-20">D.S.</span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center text-xs text-text-light mb-3 gap-3">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-sm">{article.category}</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR')}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-xl font-bold text-primary hover:text-accent transition-colors mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-text-light text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                </div>
                <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-primary hover:text-accent flex items-center transition-colors">
                  Devamını Oku <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
