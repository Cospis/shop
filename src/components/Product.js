import React, { useState, useEffect } from "react";
import Naira from "react-naira";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const a = Number(id);
  const [Product, SetProduct] = useState(null);
  const [loading, Setloading] = useState(true);
  // useEffect(() => {
  //   const Getproduct = > {
  //     Setloading(true);
  //     const response = await fetch("https://cospis.github.io/products.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         SetProduct(data);
  //         console.log(data);
  //         console.log(Product);
  //         Setloading(false);
  //       });
  //     // /
  //   };
  //   Getproduct();
  //   console.log(id);
  // }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetProduct(data);
        Setloading(false);
        console.log(Product);
      });
  }, []);
  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <br />
        <div className="col-md-6">
          <img
            src={Product.image}
            alt={Product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{Product.category}</h4>
          <h1 className="display-5">{Product.title}</h1>
          {/* <p className="lead">Rating: {Product.rating}</p> */}
          <h3 className="display-6 fw-bold my 4">
            {" "}
            <Naira>{Product.price}</Naira>
          </h3>
          <p className="lead">Rating: {Product.description}</p>
          <br />
          <div className="contacus">
            <p className="phone">Call: 090XXXXXXXX</p>
            <p className="address">FUTA Area</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="product">
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
