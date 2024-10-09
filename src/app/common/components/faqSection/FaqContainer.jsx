'use client';

import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Faqs from './components/Faqs';
import { darker } from '@/styles/common/colors';

// COMPONENTS

function FaqContainer({ faqs = [], heading = '', subHeading = '' }) {
  return (
    <Grid container columnSpacing={2} sx={{ marginTop: '120px' }}>
      <Grid item md={6}>
        <Typography color={darker} variant="h1">{`${heading} ${subHeading}`}</Typography>
      </Grid>

      <Grid item md={6}>
        {faqs?.map(item => (
          <Faqs
            key={item?.id}
            question={item?.question}
            answer={item?.answer}
            questionTypoVariant="h6"
            answerTypoVariant="body1"
            questionColor="darkPurple"
            answerColor="darkPurple"
            questionClassName="px-3"
            answerClassName="px-3"
          />
        ))}
      </Grid>
    </Grid>
  );
}

FaqContainer.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  faqs: PropTypes.array,
};

export default memo(FaqContainer);
