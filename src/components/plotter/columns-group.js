import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import ColumnItem from "components/plotter/column-item";

const useStyles = makeStyles((theme) => ({
  componentBox: {},
  columnsTitle: {
    color: theme.palette.text.primary,
    fontWeight: "600",
    fontSize: theme.typography.pxToRem(20),
    margin: theme.spacing(3, 0, 0),
  },
}));

const ColumnsGroup = ({ columns, title, setDroppedCol }) => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
      <Typography className={classes.columnsTitle}>{title}:</Typography>
      <Box>
        {columns.map((column) => (
          <ColumnItem
            column={column}
            key={column.name}
            setDroppedCol={setDroppedCol}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ColumnsGroup;
