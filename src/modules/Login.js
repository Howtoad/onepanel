import { BsFillKeyFill } from "react-icons/bs";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const styles = {
    loginButtonCss:
      "text-base text-white bg-opGreen flex leading-7 px-3 py-2 max-w-max mt-9 justify-self-center",
    inputCss: "ml-2 row-start-1 row-end-2",
    labelCss: "grid",
    pCss: "text-base row-start-1 row-end-2 min-w-[72px]",
  };
  return (
    <div className="grid bg-opGrayBg max-w-max px-5 pt-4 pb-16 gap-y-7">
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
