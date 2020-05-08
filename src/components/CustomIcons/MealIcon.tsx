import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
// @ts-ignore
import meal from "../../images/icons/Meal.svg";

export const MealIcon: React.FC<any> = props => {
  return (
    <SvgIcon {...props}>
      <use xlinkHref={`#${meal.id}`} />
    </SvgIcon>
  );
};
