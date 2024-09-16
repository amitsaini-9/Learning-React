// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { itemsAction } from "../store/itemsSlice";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchingStatus);

//   const dispatch = useDispatch([]);
//   useEffect(() => {
//     if (fetchStatus.fetchDone) {
//       return;
//     }
//     const controller = new AbortController();
//     const signal = controller.signal;
//     dispatch(fetchStatusActions.markFetchingeStarted());
//     fetch("http://localhost:8080/items", { signal })
//       .then((res) => res.json(res))
//       .then(({ items }) => {
//         dispatch(fetchStatusActions.markFetchingeDone());
//         dispatch(itemsAction.addInitialItems(items));
//         dispatch(fetchStatusActions.markFetchDone());
//       });
//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);
//   return <></>;
// };
// export default FetchItems;
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the fetch has already been completed
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    // Start fetching process and update Redux state
    dispatch(fetchStatusActions.markFetchingStarted());

    // Fetch the items from the backend
    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        // Dispatch actions to update the items and fetch status in the store
        dispatch(itemsAction.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchingDone());
        dispatch(fetchStatusActions.markFetchDone());
      })
      .catch((error) => {
        // If fetch is aborted, handle it gracefully
        if (error.name === "AbortError") {
        } else {
        }
      });

    // Clean up function to abort the fetch request if the component unmounts
    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return null;
};

export default FetchItems;
