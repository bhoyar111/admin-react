import { lazy } from 'react';
// login section
const Login                     = lazy(() => import('./Views/Login/Login'));
const ForgetPassword            = lazy(() => import('./Views/ForgetPassword/ForgetPassword'));
const Dashboard                 = lazy(() => import('./Views/Dashboard/Dashboard'));
/* General Setting */
// Users
const User                      = lazy(() => import('./Views/Setting/GeneralSetting/User/List'));
const AddUser                   = lazy(() => import('./Views/Setting/GeneralSetting/User/Add'));
const EditUser                  = lazy(() => import('./Views/Setting/GeneralSetting/User/Edit'));


const routes = [
    // login section
    { path: '/', exact: true, name: "Login", component: Login },
    { path: '/forget-password', exact: true, name: "ForgetPassword", component: ForgetPassword },
    { path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard },
    // Users (Master)
    { path: '/user', exact: true, name: "User", component: User },
    { path: '/user-add', exact: true, name: "User Add", component: AddUser },
    { path: '/user-edit/:id', exact: true, name: "User Edit", component: EditUser },
];

export default routes;