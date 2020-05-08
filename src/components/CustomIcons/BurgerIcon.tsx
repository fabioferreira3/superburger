import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
// @ts-ignore
import burger from "../../images/icons/Burger.svg";

export const BurgerIcon: React.FC<any> = props => {
  return (
    <SvgIcon {...props}>
      <use xlinkHref={`#${burger.id}`} />
    </SvgIcon>
  );
};
