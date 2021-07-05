import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BottomNavigation, BottomNavigationAction, Typography, Button } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Visibility, LibraryBooks} from '@material-ui/icons';
import Post from './Post';
import Comment from './Comment';
import { fetchPosts } from '../store/actions';


const App = () => {
  
  const dispatch = useDispatch();
  const [navState, setNavState] = useState(false);
  const loadedPosts = useSelector((state) => state.posts);
  const currentPost = useSelector((state) => state.currentPost);
  const comments = useSelector((state) => state.comments);
  console.log(loadedPosts.length);
  console.log(navState);
  const savePosts = () => async (dispatch) => {
    try {
      const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchPosts(posts.data));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => dispatch(savePosts()), []);

  return (
    <div>
      <Typography variant="h1"><b>Fake</b>Posts</Typography>
      <Button variant="contained" color="secondary" onClick={() => setNavState(!navState)}>
        {navState ? 'Show posts' : 'Hide posts'}
      </Button>
      <div className="row" id="showPosts" style={ { display: navState ? 'none' : '' } }>
        {loadedPosts.map((post) => (<Post post={post} key={post.id}/>))}
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
        <Typography variant="h6">Written by user (id)</Typography>
            { currentPost ? <Typography variant="h6">{currentPost.userId}</Typography> : <Typography variant="h6">Nothing to show.</Typography> }
        </div>
      </div>
      <BottomNavigation value={navState} onChange={(event, newValue) => setNavState(newValue)}>
        <BottomNavigationAction label="Recent Posts" value={false} icon={<LibraryBooks />} />
        <BottomNavigationAction label="Current" value={true} icon={<Visibility />} />
      </BottomNavigation>
    </div>
  )
};

export default App;
