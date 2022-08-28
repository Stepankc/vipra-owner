import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../components/chart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: 2020,
    data: [
      { name: 'информация...', data: [10, 41, 35, 151, 49, 62, 69, 91, 300,123,42,123] },
      { name: 'информация...', data: [10, 34, 13, 56, 77, 88, 99, 77, 45,54,75,123] },
    ],
  }
];

export default function CountEnergy() {
  const [seriesData, setSeriesData] = useState(2020);

  const handleChangeSeriesData = (event) => {
    setSeriesData(Number(event.target.value));
  };

  const chartOptions = merge(BaseOptionChart(), {
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  });

  return (
    <Card>
      <CardHeader
        title="информация о разьемах"
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 1, mx: 1 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="area" series={item.data} options={chartOptions} height={150} />
          )}
        </Box>
      ))}
    </Card>
  );
}
