import { useState } from "react"
import { connect } from "react-redux"
import { addTask } from "../store/creators/actionCreator"



function ToDoList() {

    const [taskName, setTaskName] = useState('')

    const handleAddTaskButton = () => {
        props.onAddTask(taskName)
    }

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" placeholder="Enter Task" onChange={handleChange} />
            <button onClick={handleAddTaskButton}>Add Task</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskRed.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch(addTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)