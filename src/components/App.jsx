import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import Comment from './Comment';
import Pagination from './Pagination';
import { savePosts } from '../store/actions';
import { Typography, Button } from '@material-ui/core';
import { Skeleton, Alert } from '@material-ui/lab';
import { spacing } from '@material-ui/system';


const App = () => {
  
  const dispatch = useDispatch();
  const [isPostsBoardActive, setPostsBoardActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const loadedPosts = useSelector((state) => state.posts);
  const currentPost = useSelector((state) => state.currentPost);
  const comments = useSelector((state) => state.comments);
  const requestState = useSelector((state) => state.requestState);

  const showRequestStatus = (requestState) => {
    
    const showSuccess = () => {
      return <Alert severity="success">Posts successfully loaded.</Alert>
    };

    const showPending = () => {
      return <Alert severity="warning">Loading posts</Alert>
    };

    const showFailure = () => {
      return <Alert severity="error">Something went wrong, please try again.</Alert>
    };

    const requestTypes = {
      SUCCESS: showSuccess,
      PENDING: showPending,
      FAILURE: showFailure,
      'null': () => null,
    };

    return requestTypes[requestState]();
  };

  useEffect(() => dispatch(savePosts()), []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPagePosts = loadedPosts.slice(firstPostIndex, lastPostIndex);

  const paginate = (number) => setCurrentPage(number);

  return (
    <div>
      <Typography variant="h1"><b>Fake</b>Posts</Typography>
      {showRequestStatus(requestState)}
      <div className="mt-3 mb-3">
        <Button variant="contained" color="secondary" onClick={() => setPostsBoardActive(!isPostsBoardActive)}>
          {isPostsBoardActive ? 'Show posts' : 'Hide posts'}
        </Button>
      </div>
      <div className="row" id="showPosts" style={ { display: isPostsBoardActive ? 'none' : '' } }>
        {currentPagePosts.map((post) => (<Post post={post} key={post.id}/>))}
      </div>
      <div className="row">
        <div className="col-md-5 mt-3">
        <Typography variant="h5">Current post</Typography>
          { currentPost ? <Post post={currentPost} /> : <Typography variant="h6">Please choose something to read.</Typography>}
        </div>
        <div className="col-md-4 mt-3">
           <Typography variant="h5">Comments</Typography>
          <ul className="list-group mt-3">
             { currentPost ? comments.map(({ name, body, id }) => (<Comment name={name} body={body} key={id}/>)) : <><Skeleton variant="text" /><Skeleton variant="rect" width={210} height={118} /></>}
          </ul>
        </div>
        <div className="col-md-3 mt-3">
        <Typography variant="h6">Written by user: </Typography>
            { currentPost ? <Typography variant="h6">@{currentPost.author}</Typography> : <Typography variant="h6">Nothing to show.</Typography> }
        </div>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={100} paginate={paginate}></Pagination>
    </div>
  )
};

export default App;
