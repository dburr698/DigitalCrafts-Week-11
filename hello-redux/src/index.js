import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counterReducer';
import taskReducer from './store/reducers/taskReducer';
import randomImageReducer from './store/reducers/randomImageReducer';
import thunk from 'redux-thunk'
import PostsReducer from './store/reducers/postsReducer';

const reducer = combineReducers({
  countRed: counterReducer,
  taskRed: taskReducer,
  randoImgRed: randomImageReducer,
  postRed: PostsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

