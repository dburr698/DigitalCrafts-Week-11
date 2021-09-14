import { connect } from "react-redux"


function FavoritesPage(props) {

    return(
        <div>
            <h1>Favorites</h1>
            <p>{props.favorites}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        favorites: state.favorites
    }
} 

export default connect(mapStateToProps)(FavoritesPage)