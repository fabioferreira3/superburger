import React, { createContext, useState } from "react";
import { Grid, Hidden } from "@material-ui/core";

import { DrawerNavMenu } from "./DrawerNavMenu/DrawerNavMenu";
import { NavMenuItem } from "./NavMenuItem";
import { navBarStyles } from "../NavBar/NavBar.styles";
import { INavMenuItem } from "./NavMenuItem.types";
import navMenuItemsData from "../../dummy/NavMenuItems.dummy";

export const NavMenuContext = createContext({});

export const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles();
  const [activeMenu, setActiveMenu] = useState(null);

  const dummyData = navMenuItemsData as INavMenuItem[];

  return (
    <NavMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      <Hidden xsDown>
        <Grid
          component="nav"
          justify={"flex-end"}
          container
          className={classes.navMenu}
        >
          {dummyData.map((menuItem, idx) => (
            <NavMenuItem key={idx} {...menuItem} />
          ))}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid
          justify={"center"}
          alignItems={"center"}
          container
          className={classes.navMenu}
        >
          <DrawerNavMenu items={dummyData} />
        </Grid>
      </Hidden>
    </NavMenuContext.Provider>
  );
};
