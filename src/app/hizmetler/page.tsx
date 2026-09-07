import { mockServices } from "@/lib/mock-data";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, Scale, Briefcase, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışma Alanlarımız",
  description: "D.S. Hukuk Bürosu olarak sunduğumuz tüm hukuki danışmanlık ve dava takibi hizmetleri.",
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Scale': return <Scale className="w-8 h-8 text-accent" />;
    case 'Briefcase': return <Briefcase className="w-8 h-8 text-accent" />;
    case 'Users': return <Users className="w-8 h-8 text-accent" />;
    default: return <Scale className="w-8 h-8 text-accent" />;
  }
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-primary py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Çalışma Alanlarımız</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Müvekkillerimize ihtiyaç duydukları her alanda, uzmanlaşmış avukatlarımızla tam kapsamlı hukuki destek sağlıyoruz.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {mockServices.map((service) => (
            <Card key={service.id} hover>
              <CardHeader className="bg-gray-50 border-b-0 pb-0">
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100 -mt-10 mb-4">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">{service.title}</h2>
              </CardHeader>
              <CardBody>
                <p className="text-text-light mb-6">{service.description}</p>
                <Link href={`/hizmetler/${service.slug}`} className="text-accent font-medium hover:text-accent-hover flex items-center transition-colors">
                  Detaylı İncele <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
