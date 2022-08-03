import React, { useState } from "react";
import { Button } from "@mui/material";
import Todo from "./Todo";
import { Add } from "../redux/actions/action";
import { useDispatch } from "react-redux";

function Home() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const addData = () => {
    dispatch(Add(data));
    setData("");
  };
  return (
    <div className="container">
      <section className="mt-3 text-center">
        <h5>Enter Your task</h5>
        <div className="todo col-lg-5 mx-auto d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button variant="contained" className="ms-2" onClick={addData}>
            Add
          </Button>
        </div>
        <Todo />
      </section>
    </div>
  );
}
export default Home;
