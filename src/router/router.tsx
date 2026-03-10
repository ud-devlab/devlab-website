import { createBrowserRouter } from "react-router-dom";

// Import pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Portfolio } from "../pages/Portfolio";
import { Resources } from "../pages/Resources";
import { NotFound } from "../pages/NotFound";

// Create the router
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    },
    {
        path: "/resources",
        element: <Resources />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);