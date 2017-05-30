import createComponent from '../views/create';
import loginComponent from '../views/login';
import errorComponent from '../views/404';

export default [
    {
        path: '/',
        name: 'create',
        meta: {
            title: '主页',
        },
        component: createComponent
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页',
        },
        component: loginComponent
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '页面未找到',
        },
        component: errorComponent
    },
    {
        path: '*',
        component: {
            functional: true,
            render (createElement, context) {
                alert('404 - Page not found', '系统提示');
                setTimeout(()=>{
                    context.parent.$router.replace('/404');
                },1000)
            }
        }
    }
];