import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Motivation() {
  const [enterdData, setEnterdData] = useState([]);
  const navigate = useNavigate();

  const getdata = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setEnterdData([response.data.slip]);
    console.log(response.data, "data");
  };

  useEffect(() => {
    getdata();
  }, []);

  const backToHomeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <br />
      {enterdData.map((item) => (
        <h2 key={item.id}> {item.advice} </h2>
      ))}

      <Button
        variant="secondary"
        onClick={backToHomeHandler}
        style={{ marginTop: "5rem" }}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default Motivation;
