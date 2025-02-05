'use client';

import styles from "./page.module.css";
import Title from "../components/title/index.js";
import Input from "@/components/input";
import TaskContainer from "@/components/taskContainer";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  function onclick() {
    return (
      console.log()

    )
  }

  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    setInputValue(event.target.value)
  }
const change = ()=>{
  return console.log(inputValue)
}


  return (
    <div>
      <div className={styles.cardContainer}>
        <Title />
        <Input setTasks={tasks} onChange={onChange} inputValue={inputValue}  add= {change}/>
        <TaskContainer tasks={tasks} />
        <div className={styles.textContainer}>
          <p>Powered by</p>
          <p className={styles.pineconeText}>Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
