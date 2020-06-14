import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { drawerNavMenuStyles } from "./DrawerNavMenu.styles";
import { INavMenuItemProps } from "../NavMenuItem.types";

export const DrawerNavMenu: React.FC<INavMenuItemProps> = ({ items }) => {
  const classes = drawerNavMenuStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (open: boolean) => () => {
    setState({ right: open });
  };

  const list = () => (
    <Box
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Grid container justify={"flex-end"} className={classes.headerWrapper}>
        <Typography variant={"h3"} className={classes.headerText}>
          Menu
        </Typography>
      </Grid>
      <Divider />
      <List>
        {items.map((item, idx) => (
          <ListItem
            button
            key={idx}
            onClick={item.onClickEvent}
            className={classes.itemWrapper}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{ className: classes.itemText }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
