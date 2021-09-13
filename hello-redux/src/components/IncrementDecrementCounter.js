import { connect } from "react-redux"
import '../styles/Counter.css'

function IncrementDecrementCounter(props) {

    const handleIncrement = () => {
        props.onIncrement()
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    return (
        <div className="counter">
            <h2 className="title">Increment/Decrement Counter</h2>

            <div className="buttons">
                <button className="button" onClick={handleIncrement}>Increment</button>
                <button className="button" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)