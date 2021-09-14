import { connect } from 'react-redux'
import '../styles/MovieList.css'
import * as actionCreator from '../stores/creators/actionCreators'

function MovieList(props) {



    const handleFavoritesButton = (movie) => {
        props.onAddFavorite(movie)
    }

    const movieItems = props.allMovies.map((movie, index) => {
        return <li className="movieLI" key={index}>
            <img className="poster" src={movie.posterURL} alt="Poster" />
            <h3>{movie.title} - {movie.year}</h3>
            <p>{movie.director}</p>
            <button value={movie.title} onClick={() => handleFavoritesButton(movie)}>Add to Favorites</button>
        </li>
    })

    return (
        <ul className="movieUL">
            {movieItems}
        </ul>
    )

}

const mapStateToProps = (state) => {
    return{
        favorite: state.favorite
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddFavorite: (movie) => dispatch(actionCreator.addToFavorites(movie))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)