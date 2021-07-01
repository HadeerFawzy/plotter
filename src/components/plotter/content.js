import React from "react";
import { makeStyles, Box } from '@material-ui/core';
import FunctionBox from 'components/plotter/function-box'

const useStyles = makeStyles(() => ({
  componentBox: {},
  functionBoxesWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
      <Box className={classes.functionBoxesWrapper}>
        <FunctionBox type='Dimension'/>
        <FunctionBox type='Measure'/>
      </Box>
        Charts goes here 
    </Box>
  )
}

export default Content