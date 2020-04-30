import React, { createContext, useState } from "react";

import { NavMenuItem } from "./NavMenuItem";
import { navBarStyles } from "../NavBar/NavBar.styles";
import navMenuItemsData from "../../dummy/NavMenuItems.dummy";

export const NavMenuContext = createContext({});

export const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles();
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <NavMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      <div className={classes.navMenu}>
        {navMenuItemsData.map((menuItem, idx) => (
          <NavMenuItem key={idx} {...menuItem} />
        ))}
      </div>
    </NavMenuContext.Provider>
  );
};
