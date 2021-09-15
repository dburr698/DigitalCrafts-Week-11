import { connect } from "react-redux"
import '../styles/Counter.css'


function DisplayCounter(props) {
    return(
        <div className="display">
            <h2>Display Counter</h2>
            <h2>{props.counter}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        counter: state.countRed.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)