// https://fakestoreapi.com/products
import { useEffect, useState } from "react";
import Productlist from "./Productlist";
const Home = () => {
  const [productlist, Setproductlist] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Setproductlist(data);
      });
  }, []);
  return (
    <div className="products">
      {productlist && <Productlist productlist={productlist} />}
      {console.log("Let's see")}
      {console.log(productlist)}
    </div>
  );
};

export default Home;
