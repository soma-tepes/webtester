import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/url/search/";
const endpoints = ["a", "b", "c", "d", "e", "f", "addtitle"];

const useStore = create((set) => ({
  data: [],
  fetchData: () => {
    const requests = endpoints.map((endpoint) =>
      axios.get(`${BASE_URL}${endpoint}`)
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response, index) => {
          if (endpoints[index] === "addtitle") {
            return response.data.title;
          } else {
            return response.data.user;
          }
        });

        set({ data });
        console.log(data);
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  },
}));

export const calculateTitlesById = (data) =>
  data[6]?.reduce((acc, item) => {
    acc[item.id] = item.title;
    return acc;
  }, {});

export default useStore;
