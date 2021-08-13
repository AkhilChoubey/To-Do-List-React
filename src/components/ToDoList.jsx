import React from "react";

function ToDoList(props){



    function checkClicked(){
        return props.onChecked(props.id);
    }

    return  <div onClick={checkClicked}>
    <li>{props.todoItem}</li>
    </div>
}

export default ToDoList;