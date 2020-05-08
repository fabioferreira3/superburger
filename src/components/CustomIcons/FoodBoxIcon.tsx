import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
// @ts-ignore
import foodBox from "../../images/icons/FoodBox.svg";

export const FoodBoxIcon: React.FC<any> = props => {
  return (
    <SvgIcon {...props}>
      <use xlinkHref={`#${foodBox.id}`} />
    </SvgIcon>
  );
};
