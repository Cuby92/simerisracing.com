import CarbonBg from '@/components/CarbonBg/CarbonBg';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';

function Layout({ children } : { children: React.ReactNode }) {
    return (
        <ScrollSmootherWrapper>
            <CarbonBg />
            <div className="pageContent">
                { children }
            </div>
            <Footer />
        </ScrollSmootherWrapper>
    );
}

export default Layout;