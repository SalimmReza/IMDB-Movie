import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Catalog from "../Pages/Catalog";
import Details from "../Pages/Details";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/:category/search/:keyword',
                element: <Catalog></Catalog>,
            },
            {
                path: '/:category/:id',
                element: <Details></Details>,
            },
            {
                path: '/:category',
                element: <Catalog></Catalog>,
            },
        ]
    }
])