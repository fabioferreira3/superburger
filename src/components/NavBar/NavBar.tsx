import React, { useState } from "react";
import { AppBar } from "@material-ui/core";

import { navBarStyles } from "./NavBar.styles";
import { CustomizedMenu } from "./CustomizedMenu";

const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles();
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <div className={classes.menuItem}>
        <CustomizedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className={classes.menuItem}>
        <CustomizedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className={classes.menuItem}>
        <CustomizedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
};

export const NavBar: React.FC = () => {
  const classes = navBarStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <NavMenu />
    </AppBar>
  );
};
