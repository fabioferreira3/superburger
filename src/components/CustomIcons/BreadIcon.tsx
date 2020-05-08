import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
// @ts-ignore
import bread from "../../images/icons/Bread.svg";

export const BreadIcon: React.FC<any> = props => {
  return (
    <SvgIcon {...props}>
      <use xlinkHref={`#${bread.id}`} />
    </SvgIcon>
  );
};
