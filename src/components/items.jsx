import React, { Component, useState } from "react";
import TodoItem from "./common/TodoListItem";

function Items() {
  const [text, setText] = useState("2222");
  const paraTest = ["One", "Two", "Three", "Four"];

  const TodoList= paraTest.map((num) => (
    <TodoItem key = {1} paraText={num} />
  ));

  return (
    <div className="m-2">
      <center>
        {TodoList}
      </center>
    </div>
  );
}

export default Items;
