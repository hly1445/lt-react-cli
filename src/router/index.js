import { lazy } from 'react';
const Home = lazy(() => import('../page/test'));
//路由列表
const Routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        title: "测试"
    },
];
export default Routes;