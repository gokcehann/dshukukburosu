import { mockServices } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = mockServices.find(s => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.title,
    description: service.description,
  };
}

export function generateStaticParams() {
  return mockServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = mockServices.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="bg-background py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{service.title}</h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-text-dark">
          <p className="lead text-xl text-text-light mb-8">
            {service.description}
          </p>
          <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif text-primary mb-4">Hizmet Kapsamı</h3>
            <p>
              Bu alanda avukatlarımız, güncel mevzuatı yakından takip ederek müvekkillerimizin haklarını en üst düzeyde savunmakta ve doğabilecek hukuki uyuşmazlıklara karşı proaktif önlemler almaktadır.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Danışmanlık Hizmetleri</li>
              <li>Dava Takibi</li>
              <li>Sözleşme Hazırlanması ve İncelemesi</li>
              <li>Arabuluculuk ve Uyuşmazlık Çözümü</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
