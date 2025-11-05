import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StandardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header plan="standard" />
      <main>{children}</main>
      <Footer plan="standard" />
    </>
  );
}
