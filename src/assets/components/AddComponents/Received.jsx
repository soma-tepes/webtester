// Componente
import React from "react";
import useStore from "../../../utils/store";
import useFetchData from "../../../utils/hookEfect";

function MyComponent() {
  const { fetchData } = useFetchData();
  const { data } = useStore();

  console.log(data[0]);

  return (
    <div>
      <h2>Datos de la API:{data[0]?.[0].namelink}</h2>
    </div>
  );
}

export default MyComponent;
