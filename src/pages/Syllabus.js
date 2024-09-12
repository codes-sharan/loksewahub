import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Card,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SampleData = () => {
  // State to store fetched data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State to handle form inputs for POST request
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch data from the API (GET request)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://quiz.loksewahub.com/samples"); // Update with your API URL
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.messdescription);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to send data to the API (POST request)
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://quiz.loksewahub.com/samples", {
        name,
        description,
      });
      alert("Data successfully sent:", response.data);
      // Optionally refresh the fetched data to reflect new additions
      setData([...data, response.data]);
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };

  // Loading and error handling
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="my-4 text-center">Sample Data</h1>

          {/* Display fetched data */}
          <Card>
            <Card.Header>Data List</Card.Header>
            <ListGroup variant="flush">
              {data.map((item) => (
                <ListGroup.Item key={item._id}>
                  <strong>{item.name}</strong>
                  <br />
                  <small>{item.description}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          <br />

          {/* <h2 className="my-4">Send New Data</h2> */}

          {/* Form for sending new data */}
          {/* <Form onSubmit={sendData}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                required
              />
            </Form.Group>
            <Button className="mt-3" variant="success" type="submit">
              Send Data
            </Button>
            <br /> <br />
          </Form> */}
        </Col>
      </Row>
    </Container>
  );
};

export default SampleData;
