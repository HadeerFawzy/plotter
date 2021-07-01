import React from "react";
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  componentBox: {}
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
        Charts goes here 
    </Box>
  )
}

export default Content