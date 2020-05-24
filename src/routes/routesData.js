import {routeRules} from "./routeRules";
import Login from "../container/login";
import Users from "../container/users";
import Home from "../container/home";
import About from "../container/about";
import Contact from "../container/contact";
import Shop from "../container/shop";
import Blog from "../container/blog";

export const routesData = [
    {
        key: routeRules.login,
        path: routeRules.login,
        component: Login,
        auth: false,
        exact: false
    },
    {
        key: routeRules.users,
        path: routeRules.users,
        component: Users,
        auth: false,
        exact: false
    },
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