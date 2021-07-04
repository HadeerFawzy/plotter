import React from 'react';
import PropTypes from 'prop-types';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    left: 0,
    right: 0,
  },
  alert: {
    width: '100%',
    padding: theme.spacing(1.25, 2),
    borderRadius: 0,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={0} variant="filled" {...props} />;
}

const Snackbar = (props) => {
  const classes = useStyles();
  const {
    message,
    open,
    onClose,
    severity = 'success',
    duration,
  } = props;

  const handleClose = (event, reason) => {
    // On snackbar close
    if (reason === 'clickaway') {
      return;
    }

    onClose(event);
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      classes={{ anchorOriginTopLeft: classes.root }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        classes={{ root: classes.alert }}
        style={{ color: `${severity === 'warning' ? '#333' : '#fff'}` }}
      >
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;

Snackbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  message: PropTypes.string.isRequired,
};
