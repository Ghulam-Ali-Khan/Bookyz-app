import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { border } from '@/styles/common/colors';

function TopListCoverage() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Top list Coverage</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" className=" font-medium">
            Average
          </Typography>
          <Typography variant="body2" className=" font-medium">
            7%
          </Typography>
        </Stack>
        <Divider sx={{ borderColor: border }} className="my-3" />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" className=" font-medium">
            Average
          </Typography>
          <Typography variant="body2" className=" font-medium">
            7%
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" className=" font-medium">
            Average
          </Typography>
          <Typography variant="body2" className=" font-medium">
            7%
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TopListCoverage;
