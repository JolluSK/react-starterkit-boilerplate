import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './ProtectedRoutes';

export const AppRoutes = () => {
    const routes = protectedRoutes;
    const commonRoutes: never[] = [];

    const element = useRoutes([...routes, ...commonRoutes]);
    return <>{element}</>;
}