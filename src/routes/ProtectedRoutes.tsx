import { MainLayout } from '@/components/ui';
import { Outlet } from 'react-router-dom';

import PathConstants from './PathConstants';

const App = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

export const protectedRoutes = [
    {
        path: '/',
        element: <App />,
        children: [],
    },
];