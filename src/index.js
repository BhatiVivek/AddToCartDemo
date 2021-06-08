import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Shape from "./Shape";

import "./styles.css";

function App() {
  const [color, setColor] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [list, setList] = useState([
    {
      name: "Bag1",
      id: "1",
      Brand: "Reebock",
      Product: "plastic"
    },
    {
      name: "Bag2",
      id: "2",
      Brand: "Levis",
      Product: "plastic"
    },
    {
      name: "Bag3",
      id: "3",
      Brand: "Levis",
      Product: "plastic"
    },
    {
      name: "Bag4",
      id: "4",
      Brand: "Levis",
      Product: "plastic"
    }
  ]);

  useEffect(() => {
    console.log("selectedData", selectedData);
  }, [selectedData]);

  const handleOnSelect = (id) => {
    console.log("id", id);
    setSelectedData((prev) => [...prev, id]);
  };

  const handleOnDelete = (index) => {
    const listData = [...list];
    listData.splice(index, 1);
    setList(listData);
  };

  return (
    <div className="App">
      {list &&
        list.map((value, index) => {
          return (
            <div className="headerDiv">
              <div
                className="listDiv"
                key={value.id}
                onClick={() => handleOnSelect(value.id)}
              >
                <div>Product: {value.name}</div>
                <div>Brand: {value.Brand}</div>
              </div>
              <button
                className="btnDelete"
                onClick={() => handleOnDelete(index)}
              >
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
