import React, { Component, useState } from "react";
import TodoItem from "./common/TodoListItem";

function Items() {
  const [text, setText] = useState("2222");
  const paraTest = ["One", "Two", "Three", "Four"];

  return (
    <div className="m-2">
      <center>
        {paraTest.map((num) => (
          <TodoItem paraText={num} />
        ))}
      </center>
    </div>
  );
}

export default Items;
