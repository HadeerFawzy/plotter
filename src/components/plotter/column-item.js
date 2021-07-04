import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useDrag } from "react-dnd";
import { useLayoutSnackbar } from 'components/shared/layout-provider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  column: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(1, 2),
    color: theme.palette.text.primary,
    fontWeight: "500",
    cursor: "pointer",
    border: "1px dashed",
    backgroundColor: theme.palette.common.white,
  },
}));

const ColumnItem = ({ column, setDroppedCol }) => {
  const classes = useStyles();
  
  const {snackbar, setSnackbar} = useLayoutSnackbar();

  const [{ opacity }, drag] = useDrag(
    () => ({
      type: column.function,
      item: { column },
      end(item, monitor) {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          const isDropAllowed =
            dropResult.allowedDropEffect === column.function

          if (isDropAllowed) {
            setDroppedCol(column)
            setSnackbar({
              ...snackbar,
              open: true,
              severity: 'success',
              duration: 1000,
              message: `You dropped ${column.name} into the ${dropResult.name}`
            });
          } else {
            setSnackbar({
              ...snackbar,
              open: true,
              severity: 'error',
              duration: 1000,
              message: `You cannot ${dropResult.dropEffect} ${column.name} into the ${dropResult.name}`
            });
          }
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [column]
  );

  if(!column) {
    return null
  }

  return (
      <Box data-test="columnItem" className={classes.column} ref={drag} style={{ opacity }}>
        {column.name}
      </Box>
  );
};

ColumnItem.propTypes = {
  column: PropTypes.object,
  setDroppedCol: PropTypes.func,
}

export default ColumnItem;
