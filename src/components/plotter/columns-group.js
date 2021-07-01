import React from "react";
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  componentBox: {},
  columnsTitle: {
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: theme.typography.pxToRem(20),
    margin: theme.spacing(3, 0, 0)
  },
  column: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(1, 2),
    color: theme.palette.text.primary,
    fontWeight: '500',
    cursor: 'pointer',
    border: '1px dashed'
  }
}));

const ColumnsGroup = ({ columns, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.componentBox}>
      <Typography className={classes.columnsTitle}>
        {title}:
      </Typography>
      <Box>
        {columns.map((column) => (
          <Box key={column.name} className={classes.column}>
            {column.name}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ColumnsGroup