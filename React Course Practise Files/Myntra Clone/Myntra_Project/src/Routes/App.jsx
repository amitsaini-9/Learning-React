import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchingStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet></Outlet>}

      <Footer></Footer>
    </>
  );
}

export default App;
