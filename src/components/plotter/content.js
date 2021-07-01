import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import FunctionBox from "components/plotter/function-box";

const useStyles = makeStyles(() => ({
  componentBox: {},
  functionBoxesWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const Content = ({ droppedCols, setDroppedCol }) => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
      <Box className={classes.functionBoxesWrapper}>
        <FunctionBox
          type="Dimension"
          allowedDropEffect="dimension"
          placeholder={"Drop a dimension column here"}
          droppedCol={droppedCols.dimension}
          setDroppedCol={setDroppedCol}
        />
        <FunctionBox
          type="Measure"
          allowedDropEffect="measure"
          placeholder={"Drop a measure column here"}
          droppedCol={droppedCols.measure}
          setDroppedCol={setDroppedCol}
        />
      </Box>
      Charts goes here
    </Box>
  );
};

export default Content;
