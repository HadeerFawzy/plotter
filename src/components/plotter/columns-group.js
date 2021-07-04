import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import ColumnItem from "components/plotter/column-item";
import PropTypes from 'prop-types';

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

  if(!columns) {
    return null
  }
  
  return (
    <Box className={classes.componentBox} data-test="columnsGroup">
      <Typography className={classes.columnsTitle} data-test="columnTypography">{title}:</Typography>
      <Box data-test="columnsBox">
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

ColumnsGroup.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    function: PropTypes.string,
  })),
  title: PropTypes.string,
  setDroppedCol: PropTypes.func,
}

export default ColumnsGroup;
