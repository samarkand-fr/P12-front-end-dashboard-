import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import TooltipActivity from '.././ToolTipActivity';

const ChartBar = ({
  dailyActivityData,
  minKgAxis,
  maxKgAxis,
  minKcalAxis,
  maxKcalAxis,
}) => (
  <ResponsiveContainer width="100%" height="90%">
    <BarChart
      data={dailyActivityData}
      margin={{
        left: 0,
        bottom: 30,
      }}
      barGap={4}
      barSize={7}
    >
      <CartesianGrid strokeDasharray="2 2" vertical={false} dot={true}/>
      <XAxis
        dataKey="day"
        tickLine={false}
        tick={{ fontSize: 14 , textAlign: "center",fontWeight: 500,}}
        dy={15}
       
      />
      <YAxis
        dataKey="kilogram"
        yAxisId="left"
        orientation="right"
        stroke="#8884d8"
        interval="number"
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 14, fill: '#74798c' }}
        tickCount={8}
        domain={[minKgAxis - 1, maxKgAxis + 2]}// Adjust the Y-axis domain for kg

      />
      <YAxis
        dataKey="calories"
        yAxisId="right"
        orientation="right"
        stroke="#82ca9d"
        hide={true}
        domain={[minKcalAxis - 50, maxKcalAxis + 50]}// Adjust the Y-axis domain for calories
        tick={{
          fill: "#9B9EAC",
          fontFamily: "Roboto",
          fontWeight: 500,
          fontSize: "14px",
          textAlign: "center",
          dy: 5,
        }}
      />
      <Tooltip content={<TooltipActivity />} cursor={{ fill: "#e0e0e0" }} />
      <Bar yAxisId="left" dataKey="kilogram" fill="#000" radius={[5, 5, 0, 0]} />
      <Bar yAxisId="right" dataKey="calories" fill="#e60000" radius={[5, 5, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

ChartBar.propTypes = {
  dailyActivityData: PropTypes.array,
  minKgAxis: PropTypes.number,
  maxKgAxis: PropTypes.number,
  minKcalAxis: PropTypes.number,
  maxKcalAxis: PropTypes.number,
};

export default ChartBar;
