import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import inventaryProducts from "../../utils/inventaryProducts";

const ItemListContainer = ({ title }) => {
  const [stock, setStock] = useState([]);
  const getInventary = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(inventaryProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getInventary()
      .then((response) => {
        setStock(response);
      })
      .catch((err) => {
        console.log("Fallo la solicitud");
      })
      .finally(() => {
        console.log("Se concluyo la solicitud");
      });
  }, []);

  return (
    <div>
      <ItemList stock={stock} title={title} />
    </div>
  );
};

export default ItemListContainer;
