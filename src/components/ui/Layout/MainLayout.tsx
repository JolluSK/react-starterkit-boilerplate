import React, { FC, ReactNode } from 'react';
import { Layout } from '@/components/ui';

import { AppHeader, Sidebar } from '@/components/ui';

const { Content } = Layout;

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <AppHeader email='jsk95505@gmail.com' />
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export { MainLayout };
