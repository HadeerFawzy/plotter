import React, { useState } from "react";
import Sidebar from "components/plotter/sidebar";
import Content from "components/plotter/content";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LayoutProvider from "components/shared/layout-provider";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    minHeight: "100vh",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

const Plotter = () => {
  const classes = useStyles();

  const [droppedCols, setDroppedCols] = useState({
    measure: null,
    dimension: null,
  });

  const setDroppedCol = (column) => {
    if (column.function === "measure") {
      droppedCols.measure = column.name;
      setDroppedCols({
        ...droppedCols,
      });
    } else if (column.function === "dimension") {
      droppedCols.dimension = column.name;
      setDroppedCols({
        ...droppedCols,
      });
    }
  };

  return (
    <>
      <LayoutProvider>
        <DndProvider backend={HTML5Backend}>
          <Grid container className={classes.gridContainer}>
            <Grid item sm={12} md={3} lg={2} className={classes.gridItem}>
              <Sidebar setDroppedCol={setDroppedCol} />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item sm={12} md={8} lg={9} className={classes.gridItem}>
              <Content
                droppedCols={droppedCols}
                setDroppedCol={setDroppedCol}
              />
            </Grid>
          </Grid>
        </DndProvider>
      </LayoutProvider>
    </>
  );
};

export default Plotter;
