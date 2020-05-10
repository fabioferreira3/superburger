import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
// @ts-ignore
import bread from "../images/icons/Bread.svg";
// @ts-ignore
import burger from "../images/icons/Burger.svg";
// @ts-ignore
import foodBox from "../images/icons/FoodBox.svg";
// @ts-ignore
import meal from "../images/icons/Meal.svg";

const CustomIcon: React.FC<any> = props => (
  <SvgIcon {...props}>
    <use xlinkHref={`#${props.svg.id}`} {...props} />
  </SvgIcon>
);

export const BreadIcon: React.FC<any> = props => (
  <CustomIcon svg={bread} {...props} />
);
export const BurgerIcon: React.FC<any> = props => (
  <CustomIcon svg={burger} {...props} />
);
export const FoodBoxIcon: React.FC<any> = props => (
  <CustomIcon svg={foodBox} {...props} />
);
export const MealIcon: React.FC<any> = props => (
  <CustomIcon svg={meal} {...props} />
);
