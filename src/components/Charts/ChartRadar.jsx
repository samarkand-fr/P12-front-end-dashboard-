import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Renders a radar chart to display performance average data.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.performanceAverageData - The performance average data for the radar chart.
 * @returns {JSX.Element} The rendered ChartRadar component.
 */
const ChartRadar = ({ performanceAverageData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceAverageData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          tickLine={false}
          tick={{
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#ff0101"
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

// Prop Types
ChartRadar.propTypes = {
  performanceAverageData: PropTypes.array,
};

export default ChartRadar;
