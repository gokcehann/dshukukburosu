import { IArticle, ILawyer, IService } from '../types';

export const mockLawyers: ILawyer[] = [
  {
    id: '1',
    name: 'Av. Deniz Yılmaz',
    title: 'Kurucu Ortak',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    practiceAreas: ['Ceza Hukuku', 'Şirketler Hukuku'],
    education: ['İstanbul Üniversitesi Hukuk Fakültesi', 'Galatasaray Üniversitesi (Yüksek Lisans)'],
    barNumber: '34567',
    email: 'deniz@dshukuk.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Av. Selin Kaya',
    title: 'Kıdemli Avukat',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    practiceAreas: ['İş Hukuku', 'Aile Hukuku'],
    education: ['Ankara Üniversitesi Hukuk Fakültesi'],
    barNumber: '45678',
    email: 'selin@dshukuk.com'
  }
];

export const mockServices: IService[] = [
  {
    id: '1',
    title: 'Ceza Hukuku',
    slug: 'ceza-hukuku',
    description: 'Ağır ceza, asliye ceza ve sulh ceza davalarında etkin savunma ve hukuki danışmanlık.',
    icon: 'Scale'
  },
  {
    id: '2',
    title: 'Şirketler Hukuku',
    slug: 'sirketler-hukuku',
    description: 'Şirket kuruluşları, birleşme ve devralmalar, ticari sözleşmelerin hazırlanması.',
    icon: 'Briefcase'
  },
  {
    id: '3',
    title: 'İş Hukuku',
    slug: 'is-hukuku',
    description: 'İşçi-işveren uyuşmazlıkları, işe iade davaları ve iş sözleşmelerinin düzenlenmesi.',
    icon: 'Users'
  }
];

export const mockArticles: IArticle[] = [
  {
    id: '1',
    title: 'Yeni İş Kanunu Değişiklikleri Neler Getiriyor?',
    slug: 'yeni-is-kanunu-degisiklikleri',
    excerpt: '2024 yılında yürürlüğe giren iş kanunu değişiklikleri hem işçi hem de işveren için yeni sorumluluklar getiriyor.',
    content: '<p>İş Kanunu değişiklik detayları burada yer alacaktır...</p>',
    authorId: '2',
    publishedAt: '2024-03-15',
    category: 'İş Hukuku',
    readTime: '5 dk'
  },
  {
    id: '2',
    title: 'Anonim Şirketlerde Yönetim Kurulu Sorumlulukları',
    slug: 'anonim-sirket-yonetim-kurulu',
    excerpt: 'Anonim şirketlerde yönetim kurulu üyelerinin hukuki ve cezai sorumlulukları hakkında bilinmesi gerekenler.',
    content: '<p>Şirketler hukuku detayları burada yer alacaktır...</p>',
    authorId: '1',
    publishedAt: '2024-02-28',
    category: 'Şirketler Hukuku',
    readTime: '7 dk'
  }
];
