import { IArticle, ILawyer, IService } from '../types';

export const mockLawyers: ILawyer[] = [
  {
    id: '1',
    name: 'Av. Onur Demirceylan',
    title: 'Kurucu Avukat',
    image: '/images/team/onur.png',
    practiceAreas: ['İş Hukuku', 'Gayrimenkul Hukuku', 'Aile Hukuku', 'Ceza Hukuku', 'Çevre Hukuku', 'Spor Hukuku', 'Basın Hukuku', 'İdare ve Vergi Hukuku'],
    education: ['Doğu Akdeniz Üniversitesi'],
    barNumber: '903',
    email: 'onur@dshukuk.com',
    phone: '+90 532 681 43 45',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Av. Muhammed Melih Şahin',
    title: 'Kurucu Avukat',
    image: '/images/team/melih.png',
    practiceAreas: ['İş Hukuku', 'Gayrimenkul Hukuku', 'Aile Hukuku', 'Ceza Hukuku', 'Çevre Hukuku', 'Spor Hukuku', 'Basın Hukuku', 'İdare ve Vergi Hukuku'],
    education: ['Erzincan Üniversitesi'],
    barNumber: '911',
    email: 'melih@dshukuk.com',
    phone: '+90 532 563 10 73'
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
    title: 'İdare ve Vergi Hukuku',
    slug: 'idare-ve-vergi-hukuku',
    description: 'İdari işlemlerin iptali, tam yargı ve vergi uyuşmazlıklarında profesyonel hukuki destek.',
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
  },
  {
    id: '7',
    title: 'Çevre Hukuku',
    slug: 'cevre-hukuku',
    description: 'Çevre mevzuatından kaynaklanan uyuşmazlıklar ve idari yaptırımlara karşı hukuki danışmanlık.',
    icon: 'Scale'
  },
  {
    id: '8',
    title: 'Spor Hukuku',
    slug: 'spor-hukuku',
    description: 'Sporcuların, kulüplerin ve federasyonların hukuki süreçlerinde danışmanlık ve temsil.',
    icon: 'Users'
  },
  {
    id: '9',
    title: 'Basın Hukuku',
    slug: 'basin-hukuku',
    description: 'Medya organları ve basın mensuplarının hakları, tekzip ve tazminat davaları.',
    icon: 'FileText'
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
