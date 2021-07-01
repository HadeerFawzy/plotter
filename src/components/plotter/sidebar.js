import React from "react";
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  componentBox: {}
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
        Columns goes here 
    </Box>
  )
}

export default Sidebar