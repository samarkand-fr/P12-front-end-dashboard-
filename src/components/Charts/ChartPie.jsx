import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

/**
 * Renders a pie chart to display goal score data.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.goalScoreData - The goal score data for the pie chart.
 * @returns {JSX.Element} The rendered ChartPie component.
 */
const ChartPie = ({ goalScoreData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={goalScoreData}
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {goalScoreData.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={item.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

// Prop Types
ChartPie.propTypes = {
  goalScoreData: PropTypes.array,
};

export default ChartPie;
