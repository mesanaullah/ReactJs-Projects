import { useState } from 'react'
import React from 'react'
import {MdAddCircle} from "react-icons/md";



const AddTodo = ({ onNewItem }) => {
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClicked = () => {
        onNewItem(todoName, dueDate);
        setTodoName('');
        setDueDate('');
    }
    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter Todo Here"
                        onChange={handleNameChange}
                        value={todoName} />
                </div>
                <div className="col-4">
                    <input type="date"
                        onChange={handleDateChange}
                        value={dueDate} />
                </div>
                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-success kg-button ss-btn"
                        onClick={handleAddButtonClicked}><MdAddCircle /></button>
                </div>
            </div>
        </div>
    );
};
export default AddTodo;


// function AddTodo() {
//     return (
//         <div className="container ">
//             <div className="row kg-row">
//                 <div className="col-6">
//                     <input type="text" placeholder="Enter Todo Here" />
//                 </div>
//                 <div className="col-4">
//                     <input type="date" />
//                 </div>
//                 <div className="col-2">
//                     <button type="button" className="btn btn-success kg-button">Add</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AddTodo;


// rafc(react based component shortcut)