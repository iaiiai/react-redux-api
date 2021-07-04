import { createAction } from 'redux-actions';

export const fetchPosts = createAction('FETCH_POSTS');
export const fetchComments = createAction('FETCH_COMMENTS');
export const fetchAuthor = createAction('FETCH_AUTHOR');
