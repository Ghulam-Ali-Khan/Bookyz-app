import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import OccupancyChart from './components/charts/OccupancyChart';
import ReservationsChart from './components/charts/ReservationsChart';
import TopListCoverage from './components/TopListCoverage';
import CustomersChart from './components/charts/CustomersChart';

function Dashboard() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 container xs={12} spacing={3}>
        <Grid2 xs={12} md={6}>
          <OccupancyChart />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <ReservationsChart />
        </Grid2>
      </Grid2>
      <Grid2 container xs={12} spacing={3}>
        <Grid2 xs={12} md={4} xxl={3}>
          <TopListCoverage />
        </Grid2>
        <Grid2 xs={12} md={4} xxl={3}>
          <CustomersChart />
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default Dashboard;
