import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  
  }

  function deleteItem(id){
    setItems( prevItems =>{
      return prevItems.filter((item,index) => {
        return index !== id;
      })
    } )
  }
  return (
    <div className="container">
     <Heading />
      <div>
        <InputArea add={addItem} />
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
           <ToDoList key={index} id={index} todoItem={todoItem} onChecked = {deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
