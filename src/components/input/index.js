import React from "react";
import Styles from "./index.module.css";
function Input() {
    return (
        <div className={Styles.inputContainer}>
            <input className={Styles.input} placeholder="Add a new task..."/>
            <button className={Styles.button}>Add</button>
        </div>
    )
}

export default Input;