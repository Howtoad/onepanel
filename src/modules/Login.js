import { BsFillKeyFill } from "react-icons/bs";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const styles = {
    loginButtonCss: "text-base text-white bg-opGreen flex leading-7 px-3 py-2",
    inputCss: "",
    labelCss: "",
  };
  return (
    <div className="flex bg-opGrayBg max-w-max">
      <Input
        label={"Username"}
        inputCss={styles.inputCss}
        labelCss={styles.labelCss}
      />
      <Input
        label={"Password"}
        inputCss={styles.inputCss}
        labelCss={styles.labelCss}
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
