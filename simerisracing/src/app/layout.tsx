import "./globals.scss";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CursorCssVars from '@/utils/cursorPosition';
import { Raleway, Roboto_Flex, Poppins } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--roboto-flex'
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={`${raleway.variable} ${robotoFlex.className} ${poppins.variable}`} lang="en">
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