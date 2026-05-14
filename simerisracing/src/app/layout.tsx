import "./globals.scss";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CursorCssVars from '@/utils/cursorPosition';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
});

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={raleway.variable} lang="en">
      <CursorCssVars />
      <body>
        <NavBar />
        <section id="mainBody">
          <main id="main">
            { children }
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

export default RootLayout;