import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header plan="premium" />
      <main>{children}</main>
      <Footer plan="premium" />
    </>
  );
}
