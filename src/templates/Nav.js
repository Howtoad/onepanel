import { AiOutlineDropbox } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import MenuLink from "../modules/MenuLink";

const Nav = () => {
  const pageLinks = [
    {
      pageName: "Products",
      pageIcon: <AiOutlineDropbox size={32} />,
      link: "productList",
    },
    {
      pageName: "Costumers",
      pageIcon: <BsPerson size={32} />,
      link: "costumers",
    },
    {
      pageName: "Orders",
      pageIcon: <FaRegListAlt size={32} />,
      link: "orders",
    },
  ];

  const styles = {
    menuButton: "bg-opGray flex p-2 gap-1 w-full justify-center",
    menuParagraph: "text-sm text-center leading-8",
    menuIcon: "h-5 w-5",
  };

  return (
    <section className="bg-opGrayBg w-full flex p-4 gap-3.5 fixed bottom-0">
      {pageLinks.map((object) => (
        <MenuLink
          key={object.pageName}
          menuIcon={object.pageIcon}
          menuName={object.pageName}
          menuLink={object.link}
          menuCss={styles.menuButton}
          pCss={styles.menuParagraph}
          iconCss={styles.menuIcon}
        />
      ))}
    </section>
  );
};

export default Nav;
