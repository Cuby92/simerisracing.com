import "./globals.scss";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CursorCssVars from '@/utils/cursorPosition';

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <CursorCssVars />
      <body>
        <NavBar />
        <section id="mainBody">
          <main>
            { children }
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

export default RootLayout;