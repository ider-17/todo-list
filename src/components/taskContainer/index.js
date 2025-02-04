const { default: Tabs } = require("../tabs")
const { default: TaskList } = require("../taskList")

const TaskContainer = (props) => {
    return (
        <div className="">
            <Tabs />
            <TaskList tasks={props.tasks} />
        </div>
    )
}

export default TaskContainer;