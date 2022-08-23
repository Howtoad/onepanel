import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";

const MenuLink = ({ menuName, menuIcon, menuCss, pCss, iconCss }) => {
  return (
    <div className={menuCss}>
      <Icon icon={menuIcon} css={iconCss} />
      <Paragraph text={menuName} css={pCss} />
    </div>
  );
};

export default MenuLink;
