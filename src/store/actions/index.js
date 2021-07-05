import { createAction } from 'redux-actions';

export const fetchPosts = createAction('FETCH_POSTS');
export const fetchComments = createAction('FETCH_COMMENTS');
export const setCurrentPost = createAction('SET_CURRENT_POST');
