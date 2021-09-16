import { connect } from 'react-redux'
import '../styles/MovieList.css'
import * as actionCreator from '../stores/creators/actionCreators'

function MovieList(props) {

    const handleFavoritesButton = (movie) => {
        props.onAddFavorite(movie)
    }

    const movieItems = props.movies.map((movie) => {
        return <li className="movieLI" key={movie.id}>
            <img className="poster" src={movie.poster} alt="Poster" />
            <h3>{movie.title} - {movie.year}</h3>
            <p>{movie.director}</p>
            <button onClick={() => handleFavoritesButton(movie)}>Add to Favorites</button>
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
        movies: state.fetchRed.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddFavorite: (movie) => dispatch(actionCreator.addToFavorites(movie))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)