import React from "react";
import { navigate } from "gatsby";
import {
  FoodBoxIcon,
  BreadIcon,
  BurgerIcon,
  MealIcon,
} from "../components/CustomIcons";

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
      { title: "Meals", icon: <MealIcon />, onClickEvent: () => {} },
      { title: "Sandwiches", icon: <BurgerIcon />, onClickEvent: () => {} },
      { title: "Desserts", icon: <FoodBoxIcon />, onClickEvent: () => {} },
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
