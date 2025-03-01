import styles from './taskList.module.css'

const TASKS = [];

const TaskList = (props) => {
    if (props.tasks.length == 0) {
        return (
            <div className={styles.taskList}>No tasks yet. Add one above!</div>
        )
    }


    return (
        <div className={styles.taskList}>
            {props.tasks.map(task => {
                return (
                    <div>{task.title}</div>
                )
            })}
        </div>
    )
}

export default TaskList