import { mockLawyers } from "@/lib/mock-data";
import { Card, CardBody } from "@/components/ui/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "D.S. Hukuk Bürosu kurumsal vizyonu ve uzman avukat kadromuz hakkında bilgi edinin.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary pt-36 pb-20 md:pt-48 md:pb-28 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Hakkımızda</h1>
        <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Kurumsal Vizyonumuz</h2>
            <div className="prose text-text-light">
              <p className="mb-4">
                D.S. Hukuk Bürosu, adaletin tecellisine katkıda bulunmak ve müvekkillerine en yüksek standartlarda hukuki hizmet sunmak amacıyla kurulmuştur.
              </p>
              <p>
                Temel prensibimiz, her müvekkilimizin durumunu titizlikle analiz etmek ve onlara özel, yenilikçi ve sonuç odaklı çözümler üretmektir. Şeffaflık ve güven, çalışma anlayışımızın temelini oluşturur.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
             <span className="text-gray-400 font-serif text-2xl">Büro Görseli</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Avukatlarımız</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockLawyers.map((lawyer) => (
            <Card key={lawyer.id} hover className="overflow-hidden">
              <div className="h-64 bg-gray-200 w-full relative">
                 <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
              </div>
              <CardBody>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{lawyer.name}</h3>
                
                <div className="space-y-3 text-sm text-text-light">
                  <div>
                    <span className="font-semibold text-text-dark block">Çalışma Alanları:</span>
                    {lawyer.practiceAreas.join(', ')}
                  </div>
                  <div>
                    <span className="font-semibold text-text-dark block">Eğitim:</span>
                    <ul className="list-disc list-inside">
                      {lawyer.education.map((edu, idx) => (
                        <li key={idx}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-text-dark">Baro Sicil No: </span>
                    {lawyer.barNumber}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
