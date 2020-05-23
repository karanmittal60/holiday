import React from 'react';
import {routeRules} from "../../routes/routeRules";

const Navigation = () => {

    const navArray = [
        {id: 'home', title: 'HOME', routes: routeRules.home},
        {id: 'about', title: 'ABOUT US', routes: routeRules.about},
        {id: 'shop', title: 'SHOP', routes: routeRules.shop},
        {id: 'blog', title: 'BLOG', routes: routeRules.blog},
        {id: 'contact', title: 'CONTACT', routes: routeRules.contact},
    ]
    return (
        <div>
            {
                navArray.map((menu, index) => {
                    return (
                        <div>
                            {menu.title}
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Navigation;