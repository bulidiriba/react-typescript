import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";

import { FC } from "react";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: "home-route",
        title: "Home",
        path: "/",
        enabled: true,
        component: Home
    },
    {
        key: "about-route",
        title: "About",
        path: "/about",
        enabled: true,
        component: AboutUs
    },
    {
        key: "products-route",
        title: "Products",
        path: "/products",
        enabled: true,
        component: Product
    }

]