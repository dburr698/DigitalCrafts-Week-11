import { useEffect } from "react"
import { connect } from "react-redux"
import * as actionCreator from '../store/creators/actionCreator'
import '../styles/Posts.css'

function Posts(props) {

    useEffect(() => {
        props.onFetchPosts()
    }, [])

    const postItems = props.posts.map((post) => {
        return <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    })

    return(
        <div className="posts">
            <h1>Posts</h1>
            <ul className="postsUL">
                {postItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.postRed.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchPosts: () => dispatch(actionCreator.fetchPosts())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Posts)