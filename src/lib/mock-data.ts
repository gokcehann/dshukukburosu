import { IArticle, ILawyer, IService } from '../types';

export const mockLawyers: ILawyer[] = [
  {
    id: '1',
    name: 'Av. Onur Demirceylan',
    title: 'Kurucu Avukat',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    practiceAreas: ['İş Hukuku', 'Ceza Hukuku', 'İdare Hukuku'],
    education: ['İstanbul Üniversitesi Hukuk Fakültesi'],
    barNumber: '34567',
    email: 'onur@dshukuk.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Av. Elif Şahin',
    title: 'Kurucu Avukat',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    practiceAreas: ['Aile Hukuku', 'Gayrimenkul Hukuku', 'Miras Hukuku'],
    education: ['Ankara Üniversitesi Hukuk Fakültesi'],
    barNumber: '45678',
    email: 'elif@dshukuk.com'
  }
];

export const mockServices: IService[] = [
  {
    id: '1',
    title: 'İş Hukuku',
    slug: 'is-hukuku',
    description: 'İşçi-işveren uyuşmazlıkları, işe iade davaları ve iş sözleşmelerinin düzenlenmesi.',
    icon: 'Briefcase'
  },
  {
    id: '2',
    title: 'Ceza Hukuku',
    slug: 'ceza-hukuku',
    description: 'Ağır ceza, asliye ceza ve sulh ceza davalarında etkin savunma ve hukuki danışmanlık.',
    icon: 'Scale'
  },
  {
    id: '3',
    title: 'Aile Hukuku',
    slug: 'aile-hukuku',
    description: 'Boşanma davaları, velayet, nafaka ve mal paylaşımı uyuşmazlıklarının çözümü.',
    icon: 'Users'
  },
  {
    id: '4',
    title: 'İdare Hukuku',
    slug: 'idare-hukuku',
    description: 'İdari işlemlerin iptali ve tam yargı davalarında profesyonel hukuki destek.',
    icon: 'FileText'
  },
  {
    id: '5',
    title: 'Gayrimenkul Hukuku',
    slug: 'gayrimenkul-hukuku',
    description: 'Tapu iptal, tescil, tahliye ve kira tespit davaları ile gayrimenkul danışmanlığı.',
    icon: 'Home'
  },
  {
    id: '6',
    title: 'Miras Hukuku',
    slug: 'miras-hukuku',
    description: 'Vasiyetname düzenlenmesi, mirasın reddi, tenkis ve tapu iptal davaları.',
    icon: 'PenTool'
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
