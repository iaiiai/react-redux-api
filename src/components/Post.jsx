import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCurrentPost, fetchComments } from '../store/actions';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@material-ui/core';
import { ExpandMoreRounded } from '@material-ui/icons';

const Post = (props) => {
  
  const { post } = props;
  const { title, body, id } = post;

  const dispatch = useDispatch();

  const saveComments = (postId) => async (dispatch) => {
    console.log('here')
    try {
      const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      console.log(comments);
      await dispatch(fetchComments(comments.data));
    } catch (error) {
      throw error;
    }
  };
  
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreRounded />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>

      </AccordionSummary>

      <AccordionDetails>
        <Typography>{body}</Typography>
        <Button onClick={() => {
            dispatch(setCurrentPost(post))
            dispatch(saveComments(id));
          }
        } variant="contained" color="secondary">Read more...</Button>
      </AccordionDetails>
    </Accordion>
  );

};

export default Post;
