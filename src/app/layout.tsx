// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mohamed Mostafa - Front-End Developer | محمد مصطفى - مطور واجهات أمامية',
  description: `موقع محمد مصطفى هو محفظة أعمال شخصية تعرض مشاريع تطوير واجهات حديثة باستخدام React, TypeScript, Next.js, Tailwind, Shadcn UI والمزيد.
يهدف الموقع لعرض الأعمال الاحترافية، دعم الباحثين والمطورين والمهتمين بالتقنية. | Mohamed Mostafa Portfolio - Showcasing modern front-end projects using React, TypeScript, Next.js, Tailwind, Shadcn UI and more.`,
  keywords: [
    'Mohamed Mostafa',
    'Front-End Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Shadcn UI',
    'Portfolio',
    'مطور واجهات أمامية',
    'تطوير مواقع',
    'محفظة أعمال',
    'مشاريع ويب',
  ],
  authors: [{ name: 'Mohamed Mostafa' }],
  openGraph: {
    title: 'Mohamed Mostafa - Front-End Developer | محمد مصطفى - مطور واجهات أمامية',
    description:
      'محفظة أعمال احترافية لمطور واجهات أمامية باستخدام React, TypeScript, Next.js, Tailwind, Shadcn UI والمزيد. | Professional portfolio showcasing modern front-end projects.',
    url: 'https://mohamedmostafajalal.vercel.app', // عدّل الرابط لو عندك دومين مختلف
    siteName: 'Mohamed Mostafa',
    images: [
      {
        url: 'https://mohamedmostafajalal.vercel.app/img/mohamed.jpg', // حط صورة محمد
        width: 1200,
        height: 630,
        alt: 'Mohamed Mostafa | محمد مصطفى',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Mostafa - Front-End Developer | محمد مصطفى',
    description: 'محفظة أعمال احترافية لمطور واجهات أمامية. | Professional front-end portfolio.',
    images: ['https://mohamedmostafajalal.vercel.app/img/mohamed.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/img/mohamed.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/img/mohamed.jpg" />
        <meta property="og:image" content="/img/mohamed.jpg" />
      </head>
      <body className="font-sans bg-[#0a0f1a] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
