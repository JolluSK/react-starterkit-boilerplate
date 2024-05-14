export const CommonRoutes = [
    { path: "/unauthorized", element: <div /> },
    { path: "*", element: <div />, children: [{ path: '/s', element: <div /> }] }
];
