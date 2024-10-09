import { grey, darker, primary } from '@/styles/common/colors';

export const tabStyle = {
  '& .tab-style ': {
    minWidth: '10%',
    fontWeight: 'bold',
    backgroundColor: grey,
    color: darker,
    borderRadius: '15px',
    padding: '0.75rem',
    gap: '1rem',
    marginRight: '8px',
  },
  '& .tab-style .selected': {
    color: primary,
  },
  '& .tab-styles ': {
    minWidth: '10%',
    fontWeight: 'bold',
    backgroundColor: grey,
    color: darker,
    borderRadius: '15px',
    padding: '0.75rem',
    gap: '1rem',
    marginLeft: '8px',
  },
};

export const test = {};
