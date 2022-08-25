import { BsFillKeyFill } from "react-icons/bs";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import { BsPerson } from "react-icons/bs";

const Login = () => {
  const styles = {
    loginButtonCss:
      "text-base text-white bg-opGreen flex leading-7 px-3 py-2 max-w-max mt-9 justify-self-center",
    inputCss: "ml-2 row-start-1 row-end-2",
    labelCss: "grid",
    pCss: "text-base row-start-1 row-end-2 min-w-[72px]",
    iconCss: "row-start-1 row-end-2",
    menuIcon: <BsPerson size={70} className="justify-self-center" />,
  };
  return (
    <div className="grid bg-opGrayBg max-w-max px-5 pt-4 pb-16 gap-y-7">
      <Icon icon={styles.menuIcon} />
      <Input
        label={"Username"}
        inputCss={styles.inputCss}
        labelCss={styles.labelCss}
        pCss={styles.pCss}
      />
      <Input
        label={"Password"}
        inputCss={styles.inputCss}
        labelCss={styles.labelCss}
        pCss={styles.pCss}
      />
      <Button
        css={styles.loginButtonCss}
        buttonText={"Sign in"}
        buttonIcon={<BsFillKeyFill size={32} />}
      />
    </div>
  );
};

export default Login;
