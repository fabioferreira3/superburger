import React from "react";
import { navigate } from "gatsby";
import { FoodBoxIcon } from "../components/CustomIcons/FoodBoxIcon";
import { BreadIcon } from "../components/CustomIcons/BreadIcon";
import { MealIcon } from "../components/CustomIcons/MealIcon";
import { BurgerIcon } from "../components/CustomIcons/BurgerIcon";

export default [
  {
    title: "Home",
    slug: "home",
    onClickEvent: () => navigate("/"),
  },
  {
    title: "About us",
    slug: "about-us",
    onClickEvent: () => navigate("/"),
  },
  {
    title: "Menu",
    slug: "menu",
    items: [
      {
        title: "Starters",
        icon: <BreadIcon />,
        onClickEvent: () => {},
      },
      { title: "Fried Baskets", icon: <FoodBoxIcon />, onClickEvent: () => {} },
      { title: "Meals", icon: <MealIcon />, onClickEvent: () => {} },
      { title: "Sandwiches", icon: <BurgerIcon />, onClickEvent: () => {} },
    ],
  },
  {
    title: "Contact",
    slug: "contact",
    onClickEvent: () => navigate("/"),
  },
  {
    title: "Reservations",
    slug: "reservations",
    onClickEvent: () => navigate("/"),
  },
];
