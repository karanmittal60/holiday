import {routeRules} from "./routeRules";
import Home from "../container/home";
import About from "../container/about";
import Contact from "../container/contact";
import Shop from "../container/shop";
import Blog from "../container/blog";

export const routesData = [


    {
        key: routeRules.home,
        path: routeRules.home,
        component: Home,
        auth: false,
        exact: false
    },
    {
        key: routeRules.about,
        path: routeRules.about,
        component: About,
        auth: false,
        exact: false
    },
    {
        key: routeRules.contact,
        path: routeRules.contact,
        component: Contact,
        auth: false,
        exact: false
    },
    {
        key: routeRules.shop,
        path: routeRules.shop,
        component: Shop,
        auth: false,
        exact: false
    },
    {
        key: routeRules.blog,
        path: routeRules.blog,
        component: Blog,
        auth: false,
        exact: false
    }
];