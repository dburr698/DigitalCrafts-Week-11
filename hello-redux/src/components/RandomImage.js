import { connect } from 'react-redux'
import '../styles/RandomImages.css'
import * as actionCreator from '../store/creators/actionCreator'

function RandomImage(props) {

    const randomURL = `https://picsum.photos/200/300?time=${new Date().getTime()}`

    const imageItems = props.randoImg.map((imgURL, index) => {
        return <li key={index}>
            <img src={imgURL}/>
        </li>
    })


    return (
        <div className="randomImages">
            <h1>Random Images</h1>
            <button onClick={() => props.onAddRandomImage(randomURL)}>Generate Random Image</button>

            <ul className="imgUL">
                {imageItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        randoImg: state.randoImgRed.randomImages
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddRandomImage: (url) => dispatch(actionCreator.randomImg(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImage)