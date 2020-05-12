import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import baguette from "../images/icons/flat3/Baguette.svg";
import beef from "../images/icons/flat2/Beef.svg";
import bread from "../images/icons/plain1/Bread.svg";
import burger from "../images/icons/plain1/Burger.svg";
import burgerMeal from "../images/icons/flat3/Meal.svg";
import chef from "../images/icons/plain1/Chef.svg";
import doughnut from "../images/icons/flat1/Doughnut.svg";
import foodBox from "../images/icons/plain1/FoodBox.svg";
import fries from "../images/icons/flat1/Fries.svg";
import hamburger from "../images/icons/flat2/Hamburger.svg";
import meal from "../images/icons/plain1/MealFlat.svg";

const CustomIcon: React.FC<any> = props => (
  <SvgIcon {...props}>
    <use xlinkHref={`#${props.svg.id}`} {...props} />
  </SvgIcon>
);

export const BaguetteIcon: React.FC = props => (
  <CustomIcon svg={baguette} {...props} />
);
export const BreadIcon: React.FC = props => (
  <CustomIcon svg={bread} {...props} />
);
export const BurgerIcon: React.FC = props => (
  <CustomIcon svg={burger} {...props} />
);
export const BurgerMealIcon: React.FC = props => (
  <CustomIcon svg={burgerMeal} {...props} />
);
export const ChefIcon: React.FC = props => <CustomIcon svg={chef} {...props} />;
export const DoughnutIcon: React.FC = props => (
  <CustomIcon svg={doughnut} {...props} />
);
export const FoodBoxIcon: React.FC = props => (
  <CustomIcon svg={foodBox} {...props} />
);
export const FriesIcon: React.FC = props => (
  <CustomIcon svg={fries} {...props} />
);
export const HamburgerIcon: React.FC = props => (
  <CustomIcon svg={hamburger} {...props} />
);
export const MealIcon: React.FC = props => <CustomIcon svg={meal} {...props} />;
export const MeatIcon: React.FC = props => <CustomIcon svg={beef} {...props} />;
