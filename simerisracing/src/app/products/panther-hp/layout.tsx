import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '',
    description: ''
}

function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            { children }
        </>
    );
}

export default Layout;