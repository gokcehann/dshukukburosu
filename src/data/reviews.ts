import { IGoogleReview, IGoogleReviewsSummary } from '@/types';

export const googleReviewsSummary: IGoogleReviewsSummary = {
  averageRating: 5.0,
  totalReviews: 24,
  starsCount: {
    5: 24,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
  // Google Haritalar profil bağlantısı
  googleMapsUrl: 'https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw',
  // Google'da doğrudan inceleme/yorum bırakma bağlantısı
  googleReviewWriteUrl: 'https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw',
};

export const mockGoogleReviews: IGoogleReview[] = [
  {
    id: '1',
    authorName: 'Emre Karaca',
    authorInitials: 'EK',
    authorRole: 'Yerel Rehber',
    avatarBgColor: 'bg-emerald-700',
    rating: 5,
    relativeTime: '2 hafta önce',
    serviceCategory: 'İş Hukuku',
    text: 'Tazminat ve işe iade sürecimde Onur Bey ve Melih Bey ilk günden kararın kesinleştiği ana kadar son derece profesyonel, şeffaf ve kararlı bir duruş sergilediler. Her duruşma öncesinde detaylı bilgilendirme yapıldı. Erzurum\'da iş hukuku alanında tereddütsüz danışabileceğiniz güvenilir bir büro.',
    reply: {
      author: 'D&S Hukuk Bürosu (Sahibi)',
      date: '1 hafta önce',
      text: 'Güzel geri bildiriminiz ve güveniniz için teşekkür ederiz Emre Bey. Haklarınızın korunması her zaman önceliğimizdir.'
    }
  },
  {
    id: '2',
    authorName: 'Selin Yıldırım',
    authorInitials: 'SY',
    authorRole: 'Doğrulanmış Müvekkil',
    avatarBgColor: 'bg-amber-700',
    rating: 5,
    relativeTime: '1 ay önce',
    serviceCategory: 'Gayrimenkul Hukuku',
    text: 'Arsa ve tapu tescili ile ilgili yıllardır çözülemeyen çok karmaşık bir hukuki ihtilafımız vardı. D&S Hukuk Bürosu dosyamızı titizlikle inceledi, doğru hukuki stratejiyi belirleyerek kısa sürede lehimize neticelendirdi. Bilgi birikimleri ve nezaketleri takdire şayan.',
  },
  {
    id: '3',
    authorName: 'Burak Demirtaş',
    authorInitials: 'BD',
    authorRole: 'Yerel Rehber',
    avatarBgColor: 'bg-blue-800',
    rating: 5,
    relativeTime: '1 ay önce',
    serviceCategory: 'Ceza Hukuku',
    text: 'Ceza davası sürecimizde gösterdikleri hassasiyet, savunma hazırlığındaki disiplin ve mahkeme salonundaki yetkinlikleri bize büyük güven verdi. Gece-gündüz demeden sorularımızı yanıtladılar. Her iki avukata da emekleri için yürekten teşekkür ederim.',
    reply: {
      author: 'D&S Hukuk Bürosu (Sahibi)',
      date: '3 hafta önce',
      text: 'Nazik değerlendirmeniz için teşekkür ederiz Burak Bey. Hukuki süreçlerinizde her daim yanınızdayız.'
    }
  },
  {
    id: '4',
    authorName: 'Ayşe Nur Çelik',
    authorInitials: 'AÇ',
    authorRole: 'Doğrulanmış Müvekkil',
    avatarBgColor: 'bg-rose-700',
    rating: 5,
    relativeTime: '2 ay önce',
    serviceCategory: 'Miras Hukuku',
    text: 'Miras taksimi ve intikal süreçlerinde ailemizin tüm haklarını büyük bir adalet ve şeffaflıkla yönettiler. Hukuki sürecin teknik detaylarını anlaşılır bir dille anlatmaları ve süreci uzlaşmayla sonuçlandırmaları bizim için çok kıymetliydi.',
  },
  {
    id: '5',
    authorName: 'Murat Öztürk',
    authorInitials: 'MÖ',
    authorRole: 'İşletme Sahibi',
    avatarBgColor: 'bg-slate-700',
    rating: 5,
    relativeTime: '3 ay önce',
    serviceCategory: 'Danışmanlık',
    text: 'Şirketimizin ticari sözleşmeleri ve kurumsal danışmanlık hizmetleri için D&S Hukuk Bürosu ile çalışıyoruz. Hızlı geri dönüşleri, önleyici hukuk yaklaşımları ve ticari dinamiklere hakimiyetleri sayesinde risklerimizi minimize ettik. Kesinlikle tavsiye ederim.',
  },
  {
    id: '6',
    authorName: 'Hakan Aslan',
    authorInitials: 'HA',
    authorRole: 'Doğrulanmış Müvekkil',
    avatarBgColor: 'bg-teal-700',
    rating: 5,
    relativeTime: '3 ay önce',
    serviceCategory: 'İdare ve Vergi',
    text: 'Haksız bir idari işlem ve ceza karşısında iptal davası açtık. Mevzuata olan derin hakimiyetleri ve emsal kararları dosyamıza ustalıkla dahil etmeleri neticesinde davayı kazandık. İletişimleri ve ilgileri için çok teşekkürler.',
  }
];
