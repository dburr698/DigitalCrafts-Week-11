import { useState } from "react"
import { connect } from "react-redux"
import { addTask } from "../store/creators/actionCreator"
import '../styles/ToDoList.css'


function ToDoList(props) {

    const [taskName, setTaskName] = useState('')

    const handleAddTaskButton = () => {
        props.onAddTask(taskName)
    }

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const taskItems = props.tasks.map((task) => {
        return <li>{task}</li>
    })


    return (
        <div className="todoList">
            <h1>ToDo List</h1>
            <div className="addTask">
                <input type="text" placeholder="Enter Task" onChange={handleChange} />
                <button onClick={handleAddTaskButton}>Add Task</button>
            </div>
            <ul className="taskUL">
                {taskItems}
            </ul>
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