import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { posts, comments, currentPost} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({ posts, comments, currentPost }), composeWithDevTools(applyMiddleware(thunk)));

export default store;
