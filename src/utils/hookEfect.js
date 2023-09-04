import { useEffect } from "react";
import useStore from "./store";

function useFetchData() {
  const { fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, []);

  return {
    fetchData,
  };
}

export default useFetchData;
