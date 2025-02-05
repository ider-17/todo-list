import { useState } from "react";
import Styles from "./index.module.css";

function Input(props) {
    
    const onClick = () => {
        const newTasks = {
            title: inputValue,
            isComplete: false
        }

        const newArr = {...props.tasks, newTasks}
        
        props.setTasks(newArr)
    }
    return (
        <div className={Styles.inputContainer}>
            <input value={props.inputValue} onChange={props.onChange} className={Styles.input} placeholder="Add a new task..." />
            <button onClick={props.add} className={Styles.button}>Add</button>
        </div>
    )
}

export default Input;