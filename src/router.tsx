import { createBrowserRouter, RouteObject } from 'react-router-dom';
import AdminHome from './admin_home/admin_home.tsx'
import Test1 from "./component/test1/test1.tsx";
import Test2 from "./component/test2/test2.tsx";



const routes: RouteObject[] = [
  {
    path: "/",
    element: <AdminHome />,
    children: [
      {
        path:"/test1",
        element:<Test1/>
      },
      {
        path:"/test2",
        element:<Test2/>
      },
    ]
  } as RouteObject ,
];

const httpRouter = createBrowserRouter(routes);
export default httpRouter;