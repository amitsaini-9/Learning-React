import styles from "./ButtonContainer.module.css";
function ButtonContainer({ buttonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={`${styles.buttonConatainer}`}>
      {buttonNames.map((names) => (
        <button
          key={names}
          className={`${styles.button}`}
          onClick={() => buttonClick(names)}
        >
          {names}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
