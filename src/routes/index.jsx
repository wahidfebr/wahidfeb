import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/myworks",
                element: <Portfolio />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default router;
