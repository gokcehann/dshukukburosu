import { IArticle, ILawyer, IService } from '../types';

export const mockLawyers: ILawyer[] = [
  {
    id: '1',
    name: 'Av. Onur Demirceylan',
    title: 'Kurucu Avukat',
    image: '/lawyer1.jpg',
    practiceAreas: ['İş Hukuku', 'Ceza Hukuku', 'İdare Hukuku'],
    education: ['Ankara Üniversitesi Hukuk Fakültesi'],
    barNumber: '12345',
    email: 'onur@dshukuk.com'
  },
  {
    id: '2',
    name: 'Av. Elif Şahin',
    title: 'Kurucu Avukat',
    image: '/lawyer2.jpg',
    practiceAreas: ['Aile Hukuku', 'Gayrimenkul Hukuku', 'Miras Hukuku'],
    education: ['İstanbul Üniversitesi Hukuk Fakültesi'],
    barNumber: '54321',
    email: 'elif@dshukuk.com'
  }
];

export const mockServices: IService[] = [
  {
    id: '1',
    title: 'İş Hukuku',
    slug: 'is-hukuku',
    description: 'İşçi ve işveren uyuşmazlıkları, iş sözleşmeleri ve tazminat davaları alanında hukuki danışmanlık.',
    icon: 'Briefcase'
  },
  {
    id: '2',
    title: 'Ceza Hukuku',
    slug: 'ceza-hukuku',
    description: 'Soruşturma ve kovuşturma aşamalarında şüpheli, sanık veya müşteki vekilliği.',
    icon: 'Scale'
  },
  {
    id: '3',
    title: 'Aile Hukuku',
    slug: 'aile-hukuku',
    description: 'Boşanma, nafaka, velayet ve mal rejiminin tasfiyesi davalarında profesyonel destek.',
    icon: 'Users'
  },
  {
    id: '4',
    title: 'İdare Hukuku',
    slug: 'idare-hukuku',
    description: 'İptal ve tam yargı davaları, memur davaları ve idari sözleşmelerden doğan uyuşmazlıklar.',
    icon: 'FileText'
  },
  {
    id: '5',
    title: 'Gayrimenkul Hukuku',
    slug: 'gayrimenkul-hukuku',
    description: 'Tapu iptal ve tescil davaları, kiralama süreçleri ve mülkiyet hukuku ihtilafları.',
    icon: 'Home'
  },
  {
    id: '6',
    title: 'Miras Hukuku',
    slug: 'miras-hukuku',
    description: 'Vasiyetname düzenlenmesi, tenkis davaları ve mirasın paylaştırılması işlemleri.',
    icon: 'PenTool'
  }
];

export const mockArticles: IArticle[] = [
  {
    id: '1',
    title: 'İşçi Hakları ve Kıdem Tazminatı',
    slug: 'isci-haklari-ve-kidem-tazminati',
    excerpt: 'İşçilerin kıdem tazminatı alma şartları ve hesaplama yöntemleri hakkında detaylı bilgi.',
    content: '<p>Kıdem tazminatı...</p>',
    authorId: '1',
    publishedAt: '2024-01-15T10:00:00Z',
    category: 'İş Hukuku',
    readTime: '5 dk'
  },
  {
    id: '2',
    title: 'Anlaşmalı Boşanma Süreci Nasıl İşler?',
    slug: 'anlasmali-bosanma-sureci',
    excerpt: 'Anlaşmalı boşanma davası açmanın şartları ve sürecin ne kadar süreceğine dair rehber.',
    content: '<p>Anlaşmalı boşanma...</p>',
    authorId: '2',
    publishedAt: '2024-02-20T14:30:00Z',
    category: 'Aile Hukuku',
    readTime: '4 dk'
  }
];
