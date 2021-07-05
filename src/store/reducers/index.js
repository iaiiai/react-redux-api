  import { handleActions } from 'redux-actions';
import { fetchPosts, fetchComments, fetchAuthor, setCurrentPost } from '../actions/index';

export const posts = handleActions( {
    [fetchPosts] (state, { payload }) {
      return payload;
    },
  }, []);


export const comments = handleActions( {
    [fetchComments] (state, { payload }) {
      return payload;
    }
  }, []);

export const currentPost = handleActions( {
    [setCurrentPost] (state, { payload }) {
    return payload;
    }
}, null)
