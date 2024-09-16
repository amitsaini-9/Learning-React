import Styles from "./InputTab.module.css";
const InputTab = ({ inputs, handleKey }) => {
  return (
    <input
      type="text"
      className={`${Styles.inputBox}`}
      placeholder={inputs}
      onKeyDown={handleKey}
    />
  );
};
export default InputTab;
