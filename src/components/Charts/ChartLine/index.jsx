import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import SessionToolTip from '../../Tooltip/TooltipSession';
import { LineChartContainer } from './styles';

const ChartLine = ({ userAverageData }) => {
  const [surfaceColor, setSurfaceColor] = useState('rgba(255, 0, 0, 0.4)');
  const [maskPosition, setMaskPosition] = useState(0);

  const handleMouseMove = (e) => {
    if (e && e.activeLabel) {
      const colorIntensity = 0.3 ;
      setSurfaceColor(`rgba(200, 0, 0, ${colorIntensity})`);
      setMaskPosition(e.chartX);
    }
  };

  const CustomCursor = () => null;

  return (
    <LineChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={200}
          data={userAverageData}
          syncId="anyId"
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 44, left: 12 }}
          onMouseMove={handleMouseMove}
        >
          <XAxis
            dataKey="day"
            stroke={surfaceColor}
            axisLine={false}
            dy={30}
            tickLine={false}
            tick={{
              fill: 'white',
              opacity: 0.7,
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 60']} hide />
          <Tooltip content={<SessionToolTip />} cursor={<CustomCursor />} />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 0, 0, 0)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <rect x={0} y={0} width={maskPosition} height={200} fill="rgba(255, 0, 0, 0.4)" />
          <rect x={maskPosition} y={0} width={500 - maskPosition} height={270} fill={surfaceColor} />
          <CustomCursor />
        </LineChart>
      </ResponsiveContainer>
    </LineChartContainer>
  );
};

ChartLine.propTypes = {
  userAverageData: PropTypes.array,
};

export default ChartLine;
