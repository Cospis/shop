import { Card, Button } from "react-bootstrap";

const Productlist = ({ productlist }) => {
  return (
    <div className="product-list">
      {productlist.map((products) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={products.image} />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
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
