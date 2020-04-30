export type NavMenuItemSubItemType = {
  title: string;
  icon?: JSX.Element;
};

export interface INavMenuItemProps {
  title: string;
  slug: string;
  items?: NavMenuItemSubItemType[];
}
