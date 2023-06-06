import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { productsAction } from "../store/reducer/product-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const FunnyJoke = () => {
  const products = useSelector((state) => state.products.product);

  const [quotes, setQuotes] = useState([]);
  //   const [firstRend, setFirstRend] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get(
      " https://official-joke-api.appspot.com/random_joke"
    );
    dispatch(productsAction.onAddData(response.data));
  };

  const getQuotes = async () => {
    const res = await axios.get(
      "https://quote-garden.onrender.com/api/v3/quotes"
    );
    setQuotes(res.data);
    console.log(quotes, " quotes");
  };
  useEffect(() => {
    getData();
    getQuotes();
  }, []);

  const BacktohomeHandel = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img
          src="https://media.tenor.com/sq5RUo3hxuYAAAAC/pakistani-kid.gif"
          alt=""
          height={250}
          width={300}
        />
      </div>

      <h2 style={{ textAlign: "center" }}>{products.setup}</h2>
      <h2 style={{ textAlign: "center" }}>{products.punchline}</h2>
      {/* {gif} */}
      <Button variant="dark" onClick={getData}>
        next Joke
      </Button>
      <div>
        <Button
          variant="secondary"
          onClick={BacktohomeHandel}
          style={{ margin: "1rem" }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );

  //   return <div>{"Hello"}</div>;
};

export default FunnyJoke;
