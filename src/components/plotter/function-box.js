import React from "react";
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  componentBox: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center'
  },
  typeText: {
    width: theme.spacing(10),
    color: theme.palette.text.primary
  },
  dropAreaContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    margin: theme.spacing(0, 2),
    borderRadius: '2px',
    height: theme.spacing(5)
  },
  dropArea: {
    padding: theme.spacing(0, 2),
    borderRight: '1px solid',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    minWidth: theme.spacing(40)
  },
  clearBtn: {
    height: '100%',
  }
}));

const FunctionBox = ({ type }) => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
      <Typography className={classes.typeText}>
        {type}:
      </Typography>
      <Box className={classes.dropAreaContainer}>
        <Box className={classes.dropArea}>
          Droppable Area
        </Box>
        <Button className={classes.clearBtn}>
          Clear
        </Button>
      </Box>
    </Box>
  )
}

export default FunctionBox