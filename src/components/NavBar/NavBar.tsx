import React, { useState } from "react";
import { AppBar } from "@material-ui/core";

import { navBarStyles } from "./NavBar.styles";
import { CustomizedMenu, StyledMenuItem } from "./CustomizedMenu"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import SendIcon from "@material-ui/icons/Send"
import ListItemText from "@material-ui/core/ListItemText"

const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles();
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <div className={classes.menuItem}>
        <CustomizedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div style={
          { position: "absolute",
            top: "70px",
            backgroundColor: "black",
            borderRadius: "0px 0px 20px 20px",
          }}>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Computadores Fortes" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Predio em construcao" />
          </StyledMenuItem>
        </div>
      </div>
      <div className={classes.menuItem}>
        <CustomizedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div style={{position: "absolute", top: "70px", backgroundColor: "black", borderRadius: "0px 0px 20px 20px"}}>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Computadores Fortes" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Predio em construcao" />
          </StyledMenuItem>
        </div>
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
