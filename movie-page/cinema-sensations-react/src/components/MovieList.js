import { connect } from 'react-redux'
import '../styles/MovieList.css'
import * as actionCreator from '../stores/creators/actionCreators'

function MovieList(props) {

    const handleFavoritesButton = (movie) => {
        props.onAddFavorite(movie)
    }

    const handleDeleteButton = (movieID) => {
        const body = {movieId: movieID}

        fetch('http://localhost:8080/api/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }) .then(response => response.json())
        .then(result => { console.log(result)
            if(result.success) {
               // callback function passed by parent components
               props.onDelete()
            }
        })
        
    }

    const movieItems = props.movies.map((movie) => {
        return <li className="movieLI" key={movie.id}>
            <a href='/details'><img className="poster" src={movie.poster} alt="Poster" /></a>
            <h3>{movie.title} - {movie.year}</h3>
            <p>{movie.director}</p>
            <button>Update</button>
            <button onClick={() => handleDeleteButton(movie.id)}>Delete</button>
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