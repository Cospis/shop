// https://fakestoreapi.com/products
import { useEffect, useState } from "react";
import Productlist from "./Productlist";
const Home = () => {
  const [productlist, Setproductlist] = useState(null);
  const [isPending, SetisPending] = useState(true);
  useEffect(() => {
    fetch("https://cospis.github.io/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Setproductlist(data);
        SetisPending(false);
      });
  }, []);
  return (
    <div className="products">
      {isPending && <div className="loading">Loading...</div>}
      {productlist && <Productlist productlist={productlist} />}
    </div>
  );
};

export default Home;
