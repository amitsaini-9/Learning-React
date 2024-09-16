import { useState } from "react";
import Item from "./ItemList";

const FoodItems = ({ items }) => {
  let [activeItem, setActiveItem] = useState([]);
  let buyButton = (event, item) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought={activeItem.includes(item)}
            handleBuyButtons={(event) => buyButton(event, item)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
