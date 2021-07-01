import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useSendRequest from "hooks/useSendRequest";
import theme from "config/theme";
import ColumnsGroup from "components/plotter/columns-group";

const useStyles = makeStyles(() => ({
  componentBox: {},
  title: {
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: "500",
  },
  divider: {
    margin: theme.spacing(2, -2),
  },
}));

const Sidebar = ({ setDroppedCol }) => {
  const classes = useStyles();
  const [, setLoading] = useState(false);

  const fetchColumns = useSendRequest({
    reqType: "get",
    url: "https://plotter-task.herokuapp.com/columns",
    setLoading: setLoading,
  });

  const columns = fetchColumns.response || null;

  const getColumnsByFunction = (columns, functionName) => {
    return columns.filter((column) => column.function == functionName);
  };

  useEffect(() => {
    fetchColumns.sendRequest();
  }, []);

  return (
    <Box className={classes.componentBox}>
      <Typography variant="h5" className={classes.title}>
        Columns
      </Typography>
      <Divider className={classes.divider} />
      {columns ? (
        <>
          <ColumnsGroup
            columns={getColumnsByFunction(columns, "dimension")}
            title="Dimension"
            setDroppedCol={setDroppedCol}
          />
          <ColumnsGroup
            columns={getColumnsByFunction(columns, "measure")}
            title="Measure"
            setDroppedCol={setDroppedCol}
          />
        </>
      ) : (
        <>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </>
      )}
    </Box>
  );
};

export default Sidebar;
