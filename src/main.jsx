import './index.css'
import {RouterProvider} from "react-router-dom";
import httpRouter from "./router.jsx";
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={httpRouter}/>
)