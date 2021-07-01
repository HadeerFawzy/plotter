import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TimelineIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Plotter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Layout