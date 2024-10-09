'use client';

import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Typography } from '@mui/material';
import { primary } from '@/styles/common/colors';

function CountdownTimer({ className = '' }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <Typography className={className} fontWeight={600} color={primary} variant="body1">
      {timer && timer}
    </Typography>
  );
}

CountdownTimer.propTypes = {
  className: propTypes.string,
};

export default CountdownTimer;
