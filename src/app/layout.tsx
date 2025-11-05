import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AMERICAN DINER ダイナー | 本格アメリカンダイニングバー',
  description: '北海道釧路市にある本格アメリカンダイニングバー。ジューシーなハンバーガーと上質なステーキをレトロな雰囲気の中でお楽しみいただけます。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
