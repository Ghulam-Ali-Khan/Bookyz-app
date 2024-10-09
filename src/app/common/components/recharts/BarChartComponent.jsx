import React, { useCallback, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import moment from 'moment';
import { primary } from '@/styles/common/colors';
import { formatChartKey } from '@/utilities/helpers';
import EmptyDataSection from '../EmptyDataSection';

function BarChartComponent({ data }) {
  const toolTipFormatter = useCallback((val, name) => [val, formatChartKey(name) || '_'], []);

  const formattedData = useMemo(
    () => data?.map(item => ({
      ...item,
      date: moment(item?.month, 'MMMM').format('MMM'),
    })),
    [data]
  );

  if (data?.length === 0) {
    return <EmptyDataSection />;
  }

  return (
    <ResponsiveContainer width="100%" height={345}>
      <BarChart
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeOpacity={0.3} />
        <XAxis
          fontSize="14px"
          tickLine={false}
          dataKey="date"
        />
        <YAxis fontSize="14px" tickLine={false} />
        <Tooltip formatter={toolTipFormatter} />
        <Legend
          className="chartLegends"
          layout="horizontal"
          align="center"
          formatter={val => formatChartKey(val) || '_'}
        />
        <Bar dataKey="total_sales" fill={primary} />
      </BarChart>
    </ResponsiveContainer>
  );
}
BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default BarChartComponent;
