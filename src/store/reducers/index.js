import { handleActions } from 'redux-actions';
import { fetchPosts, fetchComments, fetchAuthor } from '../actions/index.js';

export const posts = () => {
  handleActions( {
    [fetchPosts] () {

    },
  } );
};


export const comments = () => {
  handleActions( {
    [fetchComments] () {

    }
  } );
};


export const authors = () => {
  handleActions( {
    [fetchAuthors] () {}
  } )
}
