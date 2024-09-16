import BagSummary from "./BagSummary";
import BagItems from "./BagItems";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItems></BagItems>
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};
export default Bag;
