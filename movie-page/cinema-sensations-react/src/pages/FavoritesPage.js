import { connect } from "react-redux"
import "../styles/MovieList.css"

function FavoritesPage(props) {

    const favoriteItems = props.favorites.map((movie) => {
        return <li className="movieLI" key={movie.id}>
            <img className="poster" src={movie.poster} alt="Poster" />
            <h3>{movie.title} - {movie.year}</h3>
            <p>{movie.director}</p>
        </li>
    })

    return (
        <div>
            <h1>Favorites</h1>
            <ul className="movieUL">
                {favoriteItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favRed.favorites
    }
}

export default connect(mapStateToProps)(FavoritesPage)