import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useDrop } from "react-dnd";
import theme from 'config/theme'

const useStyles = makeStyles((theme) => ({
  componentBox: {
    margin: theme.spacing(2, 0),
    display: "flex",
    alignItems: "center",
  },
  typeText: {
    width: theme.spacing(10),
    color: theme.palette.text.primary,
  },
  dropAreaContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    margin: theme.spacing(0, 2),
    borderRadius: "2px",
    height: theme.spacing(5),
  },
  dropArea: {
    padding: theme.spacing(0, 2),
    borderRight: "1px solid",
    height: "100%",
    display: "flex",
    alignItems: "center",
    minWidth: theme.spacing(40),
  },
  clearBtn: {
    height: "100%",
  },
}));

function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return '#48a39a';
  } else if (canDrop) {
    return theme.palette.secondary.main;
  } else {
    return theme.palette.common.white;
  }
}

const FunctionBox = ({ type, allowedDropEffect, placeholder, droppedCol, setDroppedCol }) => {
  const classes = useStyles();

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: allowedDropEffect,
      drop: () => ({
        name: `${allowedDropEffect}`,
        allowedDropEffect,
      }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [allowedDropEffect]
  );

  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);

  return (
    <Box className={classes.componentBox}>
      <Typography className={classes.typeText}>{type}:</Typography>
      <Box className={classes.dropAreaContainer}>
        <Box
          className={classes.dropArea}
          ref={drop}
          style={{ backgroundColor }}
        >
          {droppedCol ? droppedCol : placeholder}
        </Box>
        <Button className={classes.clearBtn} onClick={() => setDroppedCol({
          name: null,
          function: allowedDropEffect
        })}>Clear</Button>
      </Box>
    </Box>
  );
};

export default FunctionBox;
