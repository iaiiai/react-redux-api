import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const Comment = (props) => {

  const { name, body } = props;

  return (
    <Paper elevation={3} className="mt-4 px-5 py-5">
      <Typography><b>{name}</b></Typography>
      <Typography>{body}</Typography>
    </Paper>
  );

};

export default Comment;
