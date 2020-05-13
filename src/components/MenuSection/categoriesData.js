export const categories = {
  STARTERS: "starters",
  MEALS: "meals",
  SANDWICHES: "sandwiches",
  DESSERTS: "desserts",
};
export const menuItems = {
  [categories.STARTERS]: [
    {
      title: "Little bread",
      price: "$9.90",
      imageName: "menu_item1",
    },
  ],
  [categories.MEALS]: [
    {
      title: "Combo mix",
      price: "$29.90",
      imageName: "menu_item2",
    },
  ],
  [categories.SANDWICHES]: [
    {
      title: "Super Hamburger",
      price: "$19.90",
      imageName: "menu_item3",
    },
  ],
  [categories.DESSERTS]: [
    {
      title: "Chocolate Cake",
      price: "$7.90",
      imageName: "menu_item4",
    },
  ],
};
