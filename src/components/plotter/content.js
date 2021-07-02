import React, { useEffect, useState } from "react";
import { makeStyles, Box, Fade } from "@material-ui/core";
import FunctionBox from "components/plotter/function-box";
import Chart from "components/plotter/chart";

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

  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (droppedCols.measure && droppedCols.dimension) {
      setShowChart(true);
    } else {
      setShowChart(false);
    }
  }, [droppedCols]);

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
      <Fade in={showChart}>
        <Box>{showChart && <Chart droppedCols={droppedCols} />}</Box>
      </Fade>
    </Box>
  );
};

export default Content;
