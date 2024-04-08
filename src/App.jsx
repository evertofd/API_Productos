import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grilla from "./assets/components/Grilla";
import Buscador from "./assets/components/Buscador";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState("")

  const getAllData = async () => {
    let products = await fetch("https://fakestoreapi.com/products");
    let data = await products.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Productos</h1>
        <Buscador search={search} setSearch={setSearch}/>
        <Grilla products={products.filter(f => f.title.toLowerCase().includes(search.toLowerCase()))}/>
      </div>
    </>
  );
};

export default App;
