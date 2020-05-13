import {
  BurgerMealIcon,
  DoughnutIcon,
  FriesIcon,
  HamburgerIcon,
} from "../CustomIcons";

export const categories = [
  {
    title: "Starters",
    slug: "starters",
    icon: FriesIcon,
  },
  {
    title: "Meals",
    slug: "meals",
    icon: BurgerMealIcon,
  },
  {
    title: "Sandwiches",
    slug: "sandwiches",
    icon: HamburgerIcon,
  },
  {
    title: "Desserts",
    slug: "desserts",
    icon: DoughnutIcon,
  },
];

export const menuItems = {
  starters: [
    {
      title: "Little bread",
      price: "$9.90",
      imageName: "menu_item1",
    },
  ],
  meals: [
    {
      title: "Combo mix",
      price: "$29.90",
      imageName: "menu_item2",
    },
  ],
  sandwiches: [
    {
      title: "Super Hamburger",
      price: "$19.90",
      imageName: "menu_item3",
    },
  ],
  desserts: [
    {
      title: "Chocolate Cake",
      price: "$7.90",
      imageName: "menu_item4",
    },
  ],
};
