import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counterReducer';
import taskReducer from './store/reducers/taskReducer';
import randomImageReducer from './store/reducers/randomImageReducer';

const reducer = combineReducers({
  countRed: counterReducer,
  taskRed: taskReducer,
  randoImgRed: randomImageReducer
})

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

