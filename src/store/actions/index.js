import { createAction } from 'redux-actions';
import axios from 'axios';

export const fetchPosts = createAction('FETCH_POSTS');
export const fetchComments = createAction('FETCH_COMMENTS');
export const setCurrentPost = createAction('SET_CURRENT_POST');

export const setSucccess = createAction('SET_SUCCESS');
export const setPending = createAction('SET_PENDING');
export const setFailure = createAction('SET_FAILURE');

export const savePosts = () => async (dispatch) => {
  try {
    dispatch(setPending());
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setSucccess());
    dispatch(fetchPosts(posts.data));
  } catch (error) {
    dispatch(setFailure());
    throw error;
  }
};

export const saveComments = (postId) => async (dispatch) => {
  try {
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    await dispatch(fetchComments(comments.data));
  } catch (error) {
    throw error;
  }
};

export const fetchAuthor = (post, userId) => async (dispatch) => {
  try {
    const author = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    await dispatch(setCurrentPost({ post, author: author.data.username.toLowerCase() }));
  } catch (error) {
    throw error;
  }
};

