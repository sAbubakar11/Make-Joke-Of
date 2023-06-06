import React, { Fragment, useEffect, useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes, useFetcher } from "react-router-dom";
import FunnyJoke from "./pages/FunnyJoke";
import Motivation from "./pages/Motivation";
import Quotes from "./pages/Quotes";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CreateJoke from "./pages/CreateJoke";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("application  mount");

    return () => ( console.log("application unmount"))
  }, [count]);

  const incrementHandel = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <div>
        <button onClick={incrementHandel}>increment {count}</button>
        <div>
          <h1 className="header" style={{ maxWidth: "70rem" }}>
            Make Joke of
          </h1>
        </div>

        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="funnyjoke">Funny Joke </Nav.Link>
                <NavDropdown title="Other Quotes" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3"></NavDropdown.Item>
                  <NavDropdown.Item href="/quotes">
                    life Quotes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/motivation">
                    Motivation Quotes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/createjoke">
                    Create Joke
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} name="home" exect />
          <Route
            path="/funnyJoke"
            element={<FunnyJoke />}
            name="funnyJoke"
            exect
          />
          <Route
            path="/motivation"
            element={<Motivation />}
            name=" motivation"
            exect
          />
          <Route path="/quotes" element={<Quotes />} name="quotes" exect />
          <Route
            path="/createjoke"
            element={<CreateJoke />}
            name="createjoke"
            exect
          />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
