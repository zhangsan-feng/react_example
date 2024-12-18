import {createBrowserRouter, RouteObject} from 'react-router-dom'
import AdminHome from "./admin/admin_home/admin_home.jsx";
import Customer from "./admin/component/customer.jsx";
import AdminLogin from './admin/admin_login/admin_login.jsx'
import Test1 from "./admin/component/test1.jsx";
import Test2 from "./admin/component/test2.jsx";


const route:RouteObject[] = [
    {
        path: "/login",
        element: <AdminLogin/>    ,
    },
    {
        path: "/",
        element: <AdminHome/>        ,
        children: [

            {
                path: "/customers",
                element: <Customer/>    ,
            },
            {
                path: "/test1",
                element: <Test1/>    ,
            },
            {
                path: "/test2",
                element: <Test2/>    ,
            }
        ]
    },
]
const httpRouter =  createBrowserRouter(route)
export  default httpRouter