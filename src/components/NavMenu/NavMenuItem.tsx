import React, { useContext, useMemo } from "react";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import { navMenuItemStyles } from "./NavMenuItem.styles";
import { NavMenuContext } from "./NavMenu";
import { INavMenuItemProps } from "./NavMenuItem.types";

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.common.white,
    },
  },
}))(MenuItem);

const StyledListItemIcon = withStyles(theme => ({
  root: {
    minWidth: "40px",
  },
}))(ListItemIcon);

const StyledButton = withStyles(theme => ({
  root: { fontSize: "2em", width: "100%" },
}))(Button);

export const NavMenuItem: React.FC<INavMenuItemProps> = props => {
  const { title, items, slug } = props;
  const { activeMenu, setActiveMenu } = useContext<any>(NavMenuContext);
  const classes = navMenuItemStyles();

  return useMemo(() => {
    const submenuIsOpen: boolean = activeMenu === slug;

    return (
      <div className={classes.menuItem} onMouseOver={() => setActiveMenu(slug)}>
        <StyledButton variant="contained" color="primary">
          {title}
        </StyledButton>

        <Fade in={submenuIsOpen}>
          <div
            className={classes.submenu}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {items &&
              items.length &&
              items.map((item, idx) => {
                return (
                  <StyledMenuItem key={idx}>
                    {item.icon && (
                      <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                    )}
                    <ListItemText primary={item.title} />
                  </StyledMenuItem>
                );
              })}
          </div>
        </Fade>
      </div>
    );
  }, [activeMenu]);
};
