import styles from "./DisplayContainer.module.css";
const Display = ({ calVal }) => {
  return (
    <div className={`${styles.displayContainer}`}>
      <input type="text" value={calVal} readOnly />
    </div>
  );
};
export default Display;
