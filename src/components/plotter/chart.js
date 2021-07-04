import React, { useState, useEffect } from "react";
import { makeStyles, Box, useMediaQuery } from "@material-ui/core";
import useSendRequest from "hooks/useSendRequest";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";
import theme from "config/theme";
import ChartLoader from "assets/chart-loader.gif";

const useStyles = makeStyles((theme) => ({
  componentBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  chartLoader: {
    height: theme.spacing(37.5)
  }
}));

const Chart = ({ droppedCols }) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const mediumScreen = useMediaQuery(theme.breakpoints.only('md'));

  const [, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = useSendRequest({
    reqType: "POST",
    url: "https://plotter-task.herokuapp.com/data",
    setLoading: setLoading,
    params: {
      measures: [droppedCols.measure],
      dimension: droppedCols.dimension,
    },
    overwriteSuccess: (res) => setData(res.data),
  });

  const formChartArray = (data) => {
    let chartArray = [];
    const dimensionsArray = data[0].values;
    const measuresArray = data[1].values;
    let obj = {};
    dimensionsArray.map((dimension, index) => {
      obj.dimension = dimension;
      obj.measure = measuresArray[index];
      chartArray.push(obj);
      obj = {};
    });
    return chartArray;
  };

  useEffect(() => {
    fetchData.sendRequest();
  }, [droppedCols]);

  return (
    <Box className={classes.componentBox}>
      {!data && 
        <img src={ChartLoader} className={classes.chartLoader}/>
      }
      {data && (
        <ScatterChart
          width={(smallScreen ? 300 : (mediumScreen ? 500 : 800))}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis dataKey={"dimension"} name={droppedCols.dimension} />
          <YAxis dataKey={"measure"} name={droppedCols.measure}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              {droppedCols.measure}
            </Label>
          </YAxis>
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter
            name={droppedCols.dimension}
            data={formChartArray(data)}
            fill={theme.palette.primary.main}
            line
            shape="line"
          />
        </ScatterChart>
      )}
    </Box>
  );
};

export default Chart;
