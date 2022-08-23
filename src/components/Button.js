const Button = ({ buttonText, buttonIcon, css }) => {
  return (
    <button className={css}>
      {buttonIcon}
      {buttonText}
    </button>
  );
};

export default Button;
