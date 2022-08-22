import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";

const MenuLink = ({ menuText, menuIcon, menuCss, pCss, iconCss }) => {
  return (
    <div className={menuCss}>
      <Icon menuIcon={menuIcon} css={iconCss} />
      <Paragraph text={menuText} css={pCss} />
    </div>
  );
};

export default MenuLink;
