import { Retreat } from '../types/retreat';
import heroBg from '../assets/hero-bg.png';

export const retreats: Retreat[] = [
  {
    id: 1,
    title: "Creative Empowerment Retreat",
    slug: "vietnam-2026",
    date: "JAN 08-11, 2026",
    location: "Da Lat, Vietnam",
    description: "A 4-day immersive creative retreat for women. Reconnect with your creativity in a warm, intimate setting. Among pine forests and mountain views. Open windows, fresh air, soft light—spaces made for clarity and inspiration.",
    imageUrl: heroBg,
    status: 'upcoming',
    price: "3,700,000 VND",
    faq: [
      { question: "How do I register?", answer: "Booking is done after a short online interview and is confirmed upon receipt of payment via email." },
      { question: "Do I need artistic experience?", answer: "No. The retreat is designed to welcome both beginners and experienced practitioners." },
      { question: "What should I wear?", answer: "Comfortable clothing suitable for getting a little messy with art materials and for walking in nature." }
    ]
  }
];
