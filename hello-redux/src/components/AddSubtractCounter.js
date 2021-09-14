import { useState } from "react"
import { connect } from "react-redux"
import '../styles/Counter.css'
import * as actionType from '../store/actions/actionTypes'

function AddSubtractCounter(props) {

    const [counter, setCounter] = useState('')

    const handleChange = (e) => {
        const count = e.target.value
        setCounter(count)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(counter))
        setCounter('')
    }

    const handleSubtract = () => {
        props.onSubtract(parseInt(counter))
        setCounter('')
    }


    return (
        <div className="counter">
            <h2 className="title">Add/Subtract Counter</h2>

            <input type="text" className="text" value={counter} onChange={handleChange} />

            <div className="buttons">
                <button className="button" onClick={handleAdd}>Add</button>
                <button className="button" onClick={handleSubtract}>Subtract</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({ type: actionType.ADD, payload: value }),
        onSubtract: (value) => dispatch({ type: actionType.SUBTRACT, payload: value })
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter)