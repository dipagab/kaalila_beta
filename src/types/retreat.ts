export interface Retreat {
  id: number;
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  status: 'upcoming' | 'completed';
  price?: string;
  faq?: {
    question: string;
    answer: string;
  }[];
}
