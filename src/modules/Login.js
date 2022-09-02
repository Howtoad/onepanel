import { BsFillKeyFill } from "react-icons/bs";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import { BsPerson } from "react-icons/bs";
import TokenContext from "../context/TokenContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function Login() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = Navigate;

  function submitHandler(event) {
    event.preventDefault();
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: event.target[0].value,
        password: event.target[1].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        // navigate("/");
        alert("successful login");
      });
  }

  console.log(token);

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
    <>
      {token && <Navigate to="/" replace={true} />}
      <div className="grid bg-opGrayBg max-w-max px-5 pt-4 pb-16 gap-y-7 mx-auto mt-14">
        <Icon icon={styles.menuIcon} />
        <form onSubmit={submitHandler} className="grid gap-y-7">
          <Input
            label={"Username"}
            inputCss={styles.inputCss}
            labelCss={styles.labelCss}
            pCss={styles.pCss}
            name={"username"}
          />
          <Input
            label={"Password"}
            inputCss={styles.inputCss}
            labelCss={styles.labelCss}
            pCss={styles.pCss}
            name={"password"}
          />
          <Button
            css={styles.loginButtonCss}
            buttonText={"Sign in"}
            buttonIcon={<BsFillKeyFill size={32} />}
          />
        </form>
      </div>
    </>
  );
}
