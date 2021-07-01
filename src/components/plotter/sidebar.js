import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography, Divider } from '@material-ui/core';
import useSendRequest from 'hooks/useSendRequest'
import theme from "config/theme";

const useStyles = makeStyles(() => ({
  componentBox: {},
  title: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontWeight: '500'
  },
  divider: {
    margin: theme.spacing(2, -2)
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [, setLoading] = useState(false);

  const fetchColumns = useSendRequest({
    reqType: 'get', 
    url: 'https://plotter-task.herokuapp.com/columns',
    setLoading: setLoading,
  })
  const columns = fetchColumns.response || null
  console.log('columns', columns)

  useEffect(() => {
    fetchColumns.sendRequest();
  }, []);

  return (
    <Box className={classes.componentBox}>
      <Typography variant='h5' className={classes.title}>
        Columns
      </Typography> 
      <Divider className={classes.divider}/>
    </Box>
  )
}

export default Sidebar