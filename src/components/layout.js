import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";
import IncortaLogo from "assets/incortaLogo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: theme.spacing(27.125),
    height: theme.spacing(11.875),
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IncortaLogo className={classes.logo} />
          <Box className={classes.titleBox}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <TimelineIcon />
            </IconButton>
            <Typography variant="h6">
              Plotter
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
