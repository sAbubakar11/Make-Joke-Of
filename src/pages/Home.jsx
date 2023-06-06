import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Home() {
  const [enterdName, setEnterdName] = useState();
  const [enterdMail, setEnterdMail] = useState();
  const [enterdPassword, setEnterdPassword] = useState();
  const [flag, setflag] = useState(false);

  const nameHandler = (event) => {
    setEnterdName(event.target.value);
  };
  const mailHandler = (event) => {
    setEnterdMail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnterdPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setflag(true);
  };
  return (
    <div>
      {flag ? <h2>Welcome {enterdName} to MJO Family</h2> : ""}

      {
        <Form
          onSubmit={submitHandler}
          style={{ margin: "2rem", padding: "6rem" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter FullName"
              onChange={nameHandler}
              value={enterdName}
            />

            <Form.Text className="text-muted">
              We'll never share your Details with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={enterdMail}
              onChange={mailHandler}
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={enterdPassword}
              onChange={passwordHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
            style={{ marginLeft: "27rem" }}
          >
            <Form.Check
              type="checkbox"
              label="Checked T&C*"
              required
              style={{ marginRight: "24rem" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      }
    </div>
  );
}

export default Home;
