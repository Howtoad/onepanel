import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";

const MenuLink = ({ menuName, menuIcon, menuCss, pCss, iconCss, menuLink }) => {
  return (
    <Link className={menuCss} to={menuLink}>
      <Icon icon={menuIcon} css={iconCss} />
      <Paragraph text={menuName} css={pCss} />
    </Link>
  );
};

export default MenuLink;
