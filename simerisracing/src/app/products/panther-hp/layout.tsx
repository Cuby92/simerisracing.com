import { Metadata } from 'next';
import CarbonBg from '@/components/CarbonBg/CarbonBg';

function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <CarbonBg />
            { children }
        </>
    );
}

export default Layout;