import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

const GCharts = () => {
  const data = [
    { x: 1, y: 30 },
    { x: 2, y: 40 },
    { x: 3, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 21 },
  ];
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="y" argumentField="x" />
      </Chart>
    </Paper>
  );
};

export default GCharts;
