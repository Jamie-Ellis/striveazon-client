import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class LatestRelease extends React.Component {
    state = {
        isLoading: false,
        products: [],
        }

    componentDidMount() {
        fetch("http://localhost:5000/products/")
        .then(response=> response.json())
        .then(data => this.setState ({ products: data.products, isLoading:false}))
        .catch(error => this.setState ({error, isLoading: false}))
    }
  render() {
    const {products} = this.state;
    return (
      <Container>
        <h1>Latest Book Releases</h1>
        <p>The hottest books you can find on the web!</p>
        <Row className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
          {products.map((product) => (
            <Col style={{ margins: "3px" }}>
              <Card>
                <Card.Img
                  style={{ height: "30vw" }}
                  variant="top"
                  src={product.image}
                  alt={product.image}
                />
                <Card.Body style={{ height: "20vw" }}>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.price}$
                  </Card.Subtitle>
                  <Card.Text>{product.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;