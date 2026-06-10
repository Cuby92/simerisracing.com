import "./globals.scss";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CursorCssVars from '@/utils/cursorPosition';
import { Raleway, Roboto_Flex, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
  title: 'SIMERIS RACING | Reliable Sim Racing Gear Built for Real Racers',
  description: 'SIMERIS RACING builds reliable sim racing gear and sim rig hardware focused on durability, practical engineering, and long-term support for racers.'
}

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={`${raleway.variable} ${poppins.variable}`} lang="en">
      <CursorCssVars />
      <body>
      <NavBar />
        <main>
            { children }
        </main>
      </body>
    </html>
  );
}

export default RootLayout;