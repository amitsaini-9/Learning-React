import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";

const ProductsPage = () => {
  const items = useSelector((store) => store.items);
  // console.log(items);

  return (
    <main>
      <div className="items-container ">
        {items.map((item) => (
          <HomeItems key={item.id} item={item}></HomeItems>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
