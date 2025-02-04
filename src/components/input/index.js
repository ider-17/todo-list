import { useState } from "react";
import Styles from "./index.module.css";

function Input(props) {
    const [inputValue, setInputValue] = useState("");
    const onChange = (event) => {
        setInputValue(event.target.value)

    }

    const onClick = () => {
        const newTasks = {
            title: inputValue,
            isComplete: false
        }
        props.setTasks(inputValue)
    }
    return (
        <div className={Styles.inputContainer}>
            <input onChange={onChange} className={Styles.input} placeholder="Add a new task..." />
            <button onClick={onClick} className={Styles.button}>Add</button>
        </div>
    )
}

export default Input;