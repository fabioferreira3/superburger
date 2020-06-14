export interface INavMenuItemSubItem {
  title: string;
  icon?: JSX.Element;
  onClickEvent: Function;
}

export interface INavMenuItem {
  title: string;
  slug: string;
  items?: INavMenuItemSubItem[];
  onClickEvent: () => void;
}

export interface INavMenuItemProps {
  items: INavMenuItem[];
}
