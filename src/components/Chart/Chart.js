import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          id={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
