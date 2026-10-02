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
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Kurumsal Vizyonumuz</h2>
          <div className="prose text-text-light text-justify max-w-none space-y-4">
            <p>
              D&S Hukuk Bürosu olarak Erzurum ve çevresinde, hukukun üstünlüğü ve meslek etiği ilkelerine bağlı kalarak bireysel ve kurumsal müvekkillerimize hukuki danışmanlık ve avukatlık hizmeti sunmaktayız.
            </p>
            <p>
              Faaliyet alanlarımız kapsamında; aile hukuku, ceza hukuku, iş hukuku, gayrimenkul hukuku, ticaret hukuku ve icra-iflas hukuku başta olmak üzere hukuki uyuşmazlıkların çözümünde müvekkillerimizi tarafsız ve bağımsız bir anlayışla temsil ediyoruz. Hukuki süreçlerin her aşamasında şeffaf bilgilendirme yapmayı ve avukatlık mesleğinin gerektirdiği özen yükümlülüğünü eksiksiz yerine getirmeyi esas alıyoruz.
            </p>
            <p>
              Dava süreçlerinin takibinin yanı sıra, uyuşmazlıkların henüz doğmadan engellenmesi amacıyla önleyici hukuk ve danışmanlık hizmetlerine de önem veriyoruz. Mevzuat değişikliklerini ve güncel Yargıtay içtihatlarını yakından takip eden büromuz, karşılaştığınız hukuki meseleleri nesnel bir çerçevede ele almaktadır.
            </p>
            <p>
              Türkiye Barolar Birliği meslek kurallarından ve sır saklama (müvekkil gizliliği) prensibinden taviz vermeden; hak arama sürecinizde hukuki prosedürleri sizin için anlaşılır kılarak profesyonel avukatlık hizmeti sağlamaya devam ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
