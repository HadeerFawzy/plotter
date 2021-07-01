import React from "react";
import Layout from 'components/layout';
import Sidebar from 'components/plotter/sidebar';
import Content from 'components/plotter/content';
import { makeStyles, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    minHeight: '100vh'
  },
  gridItem: {
    padding: theme.spacing(2)
  }
}));

const Plotter = () => {
  const classes = useStyles();

  return (
    <>
     <Layout/>
     <Grid container className={classes.gridContainer}>
        <Grid item md={2} className={classes.gridItem}>
          <Sidebar/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md={9} className={classes.gridItem}>
          <Content/> 
        </Grid>
      </Grid>
    </>
  )
}

export default Plotter