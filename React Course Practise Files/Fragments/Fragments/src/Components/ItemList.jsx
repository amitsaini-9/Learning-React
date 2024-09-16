import styles from "./Item.module.css";
const Item = ({ foodItems, handleBuyButtons, bought }) => {
  return (
    <>
      <li className={`list-group-item ${styles.bgColor} ${bought && "active"}`}>
        <span>{foodItems}</span>
        <button
          type="button"
          className={`${styles.buttons} btn btn-primary`}
          onClick={handleBuyButtons}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
