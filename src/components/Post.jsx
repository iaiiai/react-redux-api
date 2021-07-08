import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPost, saveComments, fetchAuthor } from '../store/actions';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@material-ui/core';
import { ExpandMoreRounded } from '@material-ui/icons';

const Post = (props) => {
  
  const { post } = props;
  const { title, body, id, userId } = post;

  const dispatch = useDispatch();

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
            dispatch(fetchAuthor(post, userId));
            dispatch(saveComments(id));
          }
        } variant="contained" color="secondary">Read more...</Button>
      </AccordionDetails>
    </Accordion>
  );

};

export default Post;
