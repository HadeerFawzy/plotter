import React, { useState } from "react";
import { makeStyles, Box, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { useDrag } from "react-dnd";

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
  const [openAlertMessage, setOpenAlertMessage] = useState(null)
  const [alertMessage, setAlertMessage] = useState(null)

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
            setOpenAlertMessage(false);
            setDroppedCol(column)
            
          } else {
            setOpenAlertMessage(true)
            setAlertMessage(`You cannot ${dropResult.dropEffect} ${column.name} into the ${dropResult.name}`)
          }
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [column]
  );


  return (
    <>
      <Snackbar open={openAlertMessage} autoHideDuration={6000} 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={() => setOpenAlertMessage(false)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setOpenAlertMessage(false)} severity="error">
          {alertMessage}
        </MuiAlert>
      </Snackbar>
      <Box className={classes.column} ref={drag} style={{ opacity }} >
        {column.name}
      </Box>
    </>
  );
};

export default ColumnItem;
