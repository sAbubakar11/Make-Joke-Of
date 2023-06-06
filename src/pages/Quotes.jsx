import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Quotes() {
  const Navigate = useNavigate();

  const backToHomeHandler = () => {
    Navigate();
  };
  return (
    <div>
      Quotes
      <Button variant="secondary" onClick={backToHomeHandler}>
        Back to Home
      </Button>{" "}
    </div>
  );
}

export default Quotes;
