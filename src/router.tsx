import { createBrowserRouter, RouteObject } from 'react-router-dom';
import AdminHome from './admin_home/admin_home.tsx'
import BatchDownload from "./component/batch_download/batch_download.tsx";
import DownloadPreview from "./component/download_preview/download_preview.tsx";
import DownloadRecord from "./component/download_record/download_record.tsx";
import DownloadSettings from "./component/download_settings/download_settings.tsx";
import Download from "./component/download/download.tsx";



const routes: RouteObject[] = [
  {
    path: "/",
    element: <AdminHome />,
    children: [
      {
        path:"/download",
        element:<Download/>
      },
      {
        path:"/batch_download",
        element:<BatchDownload/>
      },
      {
        path:"/download_settings",
        element:<DownloadSettings/>
      },
      {
        path:"/download_record",
        element:<DownloadRecord/>
      },
      {
        path:"/download_preview",
        element:<DownloadPreview/>
      }
    ]
  } as RouteObject ,
];

const httpRouter = createBrowserRouter(routes);
export default httpRouter;