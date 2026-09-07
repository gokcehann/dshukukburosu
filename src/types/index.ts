export interface IArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorId: string;
  publishedAt: string;
  category: string;
  readTime: string;
}

export interface ILawyer {
  id: string;
  name: string;
  title: string;
  image: string;
  practiceAreas: string[];
  education: string[];
  barNumber: string;
  email: string;
  linkedin?: string;
}

export interface IService {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface IContactMessage {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  createdAt?: string;
}
