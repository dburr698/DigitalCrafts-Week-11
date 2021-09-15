import { connect } from "react-redux"
import AddSubtractCounter from "./AddSubtractCounter"
import DisplayCounter from "./DisplayCounter"
import IncrementDecrementCounter from "./IncrementDecrementCounter"
import '../styles/App.css'
import ToDoList from "./ToDoList"


function App(props) {
  return (
    <div className="main">
      <div className="pageTitle">
        <h1>App</h1>
      </div>
      <div className="counterChangers">
        <IncrementDecrementCounter />
        <h2 className="count">{props.counter}</h2>
        <AddSubtractCounter />
      </div>
      <div className="counterDisplay">
        <DisplayCounter />
      </div>
      <div className="todoList">
        <ToDoList />
      </div>
    </div>

  )

}

const mapStateToProps = (state) => {
  return{
    counter: state.countRed.counter
  }
}

export default connect(mapStateToProps)(App)