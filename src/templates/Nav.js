import { AiOutlineDropbox } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import MenuLink from "../modules/MenuLink";

const Nav = () => {
  const pageLinks = [
    {
      pageName: "Products",
      pageIcon: "fa-solid fa-box-open",
    },
    {
      pageName: "Costumers",
      pageIcon: "fa-solid fa-circle-user",
    },
    {
      pageName: "Orders",
      pageIcon: "fa-solid fa-table-list",
    },
  ];

  const styles = {
    menuButton: "",
    menuParagraph: "",
    menuIcon: "",
  };

  return (
    <section className="xd">
      {pageLinks.map((object) => (
        <MenuLink
          key={object.pageName}
          menuIcon={object.pageIcon}
          menuName={object.pageName}
          menuCss={styles.menuButton}
          pCss={styles.menuParagraph}
          iconCss={styles.menuIcon}
        />
      ))}
    </section>
  );
};

export default Nav;
