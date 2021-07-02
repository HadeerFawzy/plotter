import React, { useState, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
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

const useStyles = makeStyles(() => ({
  componentBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

const Chart = ({ droppedCols }) => {
  const classes = useStyles();

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
    console.log("chartArray", chartArray);
    return chartArray;
  };

  useEffect(() => {
    fetchData.sendRequest();
  }, [droppedCols]);

  return (
    <Box className={classes.componentBox}>
      {data && (
        <ScatterChart
          width={800}
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
