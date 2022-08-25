const Button = ({ buttonText, buttonIcon, css, textCss }) => {
  return (
    <button className={css}>
      {buttonIcon}
      <p className={textCss}>{buttonText}</p>
    </button>
  );
};

export default Button;
