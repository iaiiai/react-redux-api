import { handleActions } from 'redux-actions';
import { fetchPosts, fetchComments, setCurrentPost, setSucccess, setPending, setFailure } from '../actions/index';

export const posts = handleActions( {
  [fetchPosts] (state, { payload }) {
    return payload;
    },
  }, []);


export const comments = handleActions( {
  [fetchComments] (state, { payload }) {
    return payload;
    },
  }, []);

export const currentPost = handleActions( {
  [setCurrentPost] (state, action) {
    return { ...action.payload.post, author: action.payload.author };
  },
}, null);

export const requestState = handleActions( {
  [setSucccess] () {
    return 'SUCCESS';
  },
  [setPending] () {
    return 'PENDING';
  },
  [setFailure] () {
    return 'FAILURE';
  }
}, null);

