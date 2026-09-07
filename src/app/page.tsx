import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { mockServices, mockArticles } from "@/lib/mock-data";
import Link from "next/link";
import { Scale, Briefcase, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-8 h-8 text-accent" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-accent" />;
      case 'Users': return <Users className="w-8 h-8 text-accent" />;
      default: return <Scale className="w-8 h-8 text-accent" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000" 
            alt="Hukuk Bürosu" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Hukuki Süreçlerinizde <span className="text-accent">Güvenilir</span> Çözüm Ortağınız
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              D.S. Hukuk Bürosu olarak, uzman kadromuzla ceza hukuku, şirketler hukuku ve iş hukuku alanlarında profesyonel danışmanlık ve dava takibi hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/iletisim" variant="primary">
                Hemen İletişime Geçin
              </Button>
              <Button href="/hizmetler" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Çalışma Alanlarımız
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Neden Bizi Seçmelisiniz?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Yılların getirdiği tecrübe ve yenilikçi hukuki yaklaşımlarımızla müvekkillerimizin haklarını en üst düzeyde koruyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Uzman Kadro', desc: 'Her biri kendi alanında uzmanlaşmış deneyimli avukat ekibi.' },
              { title: 'Şeffaf Süreç', desc: 'Dava ve danışmanlık süreçlerinin her aşamasında düzenli bilgilendirme.' },
              { title: 'Sonuç Odaklılık', desc: 'Hukuki ihtilaflarda en hızlı ve en etkili çözüme ulaşma hedefi.' },
            ].map((feature, i) => (
              <Card key={i} className="text-center p-8 hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-accent text-2xl font-serif">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-light">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Alanları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Öne Çıkan Çalışma Alanlarımız</h2>
              <div className="w-24 h-1 bg-accent"></div>
            </div>
            <Link href="/hizmetler" className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors">
              Tümünü Gör <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockServices.slice(0, 3).map((service) => (
              <Card key={service.id} hover>
                <CardHeader className="bg-gray-50 border-b-0 pb-0">
                  <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100 -mt-10 mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-text-light mb-6 line-clamp-3">{service.description}</p>
                  <Link href={`/hizmetler/${service.slug}`} className="text-accent font-medium hover:text-accent-hover flex items-center transition-colors">
                    Detaylı İncele <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Son Makaleler */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Güncel Hukuki Gelişmeler</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Hukuk dünyasındaki son gelişmeleri, yasa değişikliklerini ve emsal kararları uzmanlarımızın kaleminden okuyun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockArticles.slice(0, 2).map((article) => (
              <Card key={article.id} hover className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden flex-shrink-0">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold text-xl opacity-20">D.S.</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center text-xs text-text-light mb-3 gap-3">
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded-sm">{article.category}</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-xl font-bold text-primary hover:text-accent transition-colors mb-3 line-clamp-2">
                        {article.title}
                      </h3>
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
          
          <div className="text-center mt-12">
            <Button href="/blog" variant="outline">
              Tüm Makaleleri İncele
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
