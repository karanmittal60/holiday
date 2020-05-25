import React from 'react';
import './navigation.css';
import {routeRules} from "../../routes/routeRules";
import Divider from "../divider";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    const navArray = [
        {id: 'home', title: 'HOME', routes: routeRules.home},
        {id: 'about', title: 'ABOUT US', routes: routeRules.about},
        {id: 'shop', title: 'SHOP', routes: routeRules.shop},
        {id: 'blog', title: 'BLOG', routes: routeRules.blog},
        {id: 'contact', title: 'CONTACT', routes: routeRules.contact},
    ]
    return (
        <div className="navigation">
            {
                navArray.map((menu, index) => {
                    return (
                        <>
                            <NavLink
                                to={menu.routes}
                                activeClassName="selected"
                                className="nav-item"
                            >
                                {menu.title}
                            </NavLink>
                            {navArray.length-1 > index ? <Divider/> : <></>}
                        </>
                    )
                })
            }

        </div>
    );
};

export default Navigation;