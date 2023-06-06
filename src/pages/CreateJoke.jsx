import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const qeutes = [{ id: 1, quote: "Chutiya ho aap", name: "bad Ass" }];

function CreateJoke() {
  const [enterdData, setEnterdData] = useState(qeutes);
  const [enterdQeutes, setEnterdQeutes] = useState();
  const [enterdname, setEnterdName] = useState();
  const [flag, setFlag] = useState();

  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate("/");
  };

  const qeutesHandler = (event) => {
    setEnterdQeutes(event.target.value);
  };
  const nameHandler = (event) => {
    setEnterdName(event.target.value);
  };
  const submitHandler = (event) => {
    if (!flag) {
      event.preventDefault();
      const newSubmit = {
        quote: enterdQeutes,
        name: enterdname,
        id: Date.now(),
      };
      setEnterdData([...enterdData, newSubmit]);
    } else {
      updateHandler(flag);
    }

    setEnterdName("");
    setEnterdQeutes("");
  };
  const deleteHandler = (id) => {
    const filteredData = enterdData.filter((ele) => ele.id !== id);
    setEnterdData(filteredData);
  };

  const editHandler = (item) => {
    setFlag(item);
    setEnterdName(item.name);
    setEnterdQeutes(item.quote);
  };

  const cencelHandler = () => {
    setFlag(false);
    setEnterdName("");
    setEnterdQeutes("");
  };

  const updateHandler = (item) => {
    const updatedDate = enterdData.map((el) => {
      if (item.id === el.id) {
        return {
          ...el,
          quote: enterdQeutes,
          name: enterdname,
        };
      } else return el;
    });

    // const updateItem = [...enterdData];
    // const findUpdate = updateItem.find((ele) => ele.id === id);
    setEnterdData(updatedDate);
    setFlag();
    setEnterdName("");
    setEnterdQeutes("");
  };
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Qeutes"
            onChange={qeutesHandler}
            value={enterdQeutes}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={nameHandler}
          value={enterdname}
        />
        {flag ? (
          <>
            <button onClick={submitHandler}>update</button>{" "}
            <button onClick={cencelHandler}>cencel</button>{" "}
          </>
        ) : (
          <button type="submit" onClick={submitHandler}>
            {" "}
            Add{" "}
          </button>
        )}
      </div>
      {enterdData.map((item) => (
        <Fragment key={item.id}>
          <h2> Your Qeutes: {item.quote}</h2>
          <h2> Name: {item.name}</h2>
          <button onClick={() => editHandler(item)}>Edit</button>
          <button onClick={() => deleteHandler(item.id)}> delete</button>
        </Fragment>
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

export default CreateJoke;
