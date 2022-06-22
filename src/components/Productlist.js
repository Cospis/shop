import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Naira from "react-naira";
import { useState } from "react";

const Productlist = ({ productlist }) => {
  // const ProductDtails = (){

  // }
  const [data, Setdata] = useState(productlist);
  return (
    <div className="product-list">
      <div className="buttons">
        <Button variant="outline-success">Latest</Button>{" "}
        <Button variant="outline-success">Newest</Button>{" "}
      </div>
      {data
        .sort((a, b) => (a.id > b.id ? -1 : 1))
        .map((products) => (
          <Card style={{ width: "15rem" }} key={products.id}>
            <Card.Img variant="top" src={products.image} />
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              {/* <Card.Text>
                95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,
                Lightweight fabric with great stretch for comfort, Ribbed on
                sleeves and neckline / Double stitching on bottom hem
              </Card.Text> */}
            </Card.Body>
            <ListGroup className="product-detils">
              <ListGroupItem>Type: {products.category}</ListGroupItem>
              <ListGroupItem>Location: Ondo State</ListGroupItem>
              <ListGroupItem>
                Price: <Naira>{products.price}</Naira>
              </ListGroupItem>
              <Nav.Link as={Link} to={`/${products.id}`}>
                <Button variant="primary">View</Button>
              </Nav.Link>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
  // return (
  //   <div className="products-list">
  //     {productlist.map((products) => (
  //       <div className="product-list" key={products.id}>
  //         <Card style={{ width: "18rem" }}>
  //           <Card.Img variant="top" src="holder.js/100px180" />
  //           <Card.Body>
  //             <Card.Title>Card Title</Card.Title>
  //             <Card.Text>
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </Card.Text>
  //             <Button variant="primary">Go somewhere</Button>
  //           </Card.Body>
  //         </Card>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Productlist;
