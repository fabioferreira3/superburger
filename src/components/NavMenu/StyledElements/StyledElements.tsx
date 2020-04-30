import { withStyles } from "@material-ui/core/styles";
import { Button, ListItemIcon, MenuItem } from "@material-ui/core";

export const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.common.white,
    },
  },
}))(MenuItem);

export const StyledListItemIcon = withStyles(theme => ({
  root: {
    minWidth: "40px",
  },
}))(ListItemIcon);

export const StyledButton = withStyles(theme => ({
  root: { fontSize: "2em", width: "100%" },
}))(Button);
