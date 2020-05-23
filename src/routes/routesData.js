import {routeRules} from "./routeRules";
import Login from "../container/login";
import Users from "../container/users";

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
    }
];