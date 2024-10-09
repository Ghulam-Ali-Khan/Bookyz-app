/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export const ratingOptions = [
  {
    label: (
      <Box className=" flex items-center gap-2">
        <Typography variant="body2" className=" font-medium">1</Typography>
        <Star fontSize="small" style={{ color: '#faaf00' }} />
      </Box>
    ),
    value: 1,
  },
  {
    label: (
      <Box className=" flex items-center gap-2">
        <Typography variant="body2" className=" font-medium">2</Typography>
        <Star fontSize="small" style={{ color: '#faaf00' }} />
      </Box>
    ),
    value: 2,
  },
  {
    label: (
      <Box className=" flex items-center gap-2">
        <Typography variant="body2" className=" font-medium">3</Typography>
        <Star fontSize="small" style={{ color: '#faaf00' }} />
      </Box>
    ),
    value: 3,
  },
  {
    label: (
      <Box className=" flex items-center gap-2">
        <Typography variant="body2" className=" font-medium">4</Typography>
        <Star fontSize="small" style={{ color: '#faaf00' }} />
      </Box>
    ),
    value: 4,
  },
  {
    label: (
      <Box className=" flex items-center gap-2">
        <Typography variant="body2" className=" font-medium">5</Typography>
        <Star fontSize="small" style={{ color: '#faaf00' }} />
      </Box>
    ),
    value: 5,
  },
];
export const test = '';
