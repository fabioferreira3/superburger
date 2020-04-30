import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SendIcon from "@material-ui/icons/Send";
import { navigate } from "gatsby";

export default [
  {
    title: "Item 1",
    slug: "item-1",
    items: [
      {
        title: "Eita",
        icon: <AddCircleOutlineIcon />,
        onClickEvent: () => navigate("/page-3/"),
      },
      { title: "eitaa", icon: <SendIcon />, onClickEvent: () => {} },
      { title: "uia", onClickEvent: () => {} },
    ],
  },
  {
    title: "Item 2",
    slug: "item-2",
    items: [
      { title: "Eita", icon: <AddCircleOutlineIcon />, onClickEvent: () => {} },
      { title: "eitaa", icon: <SendIcon />, onClickEvent: () => {} },
      { title: "uia", onClickEvent: () => {} },
    ],
  },
  {
    title: "Item 3",
    slug: "item-3",
    onClickEvent: () => navigate("/"),
  },
];
