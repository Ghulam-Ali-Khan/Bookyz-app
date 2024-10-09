import { muted, primary } from '@/styles/common/colors';

export const dashboardEvenCardStyle = {
  backgroundColor: primary,
  color: 'white',
  borderRadius: 2,
};
export const dashboardOddCardStyle = {
  backgroundColor: muted,
  color: 'white',
  borderRadius: 2,
};

export const dashboardCardStyle = isEven => ({
  backgroundColor: !isEven ? primary : muted,
  color: 'white',
  borderRadius: 2,
});

export const dashboardCardChildWrapperStyle = { padding: '10px 10px 12px 10px' };
export const dashboardCardStackLeftStyle = { justifyContent: 'space-between', alignItems: 'start' };
export const dashboardCardStackIconStyle = { fontSize: 50 };
export const dashboardCardStackTitleStyle = { fontSize: 14, fontWeight: 500 };
export const dashboardCardStackSubTitleStyle = { fontSize: 14, fontWeight: 500 };
export const dashboardCardDetailStackStyle = {
  marginTop: 0,
  justifyContent: 'space-between',
  alignItems: 'end',
};
export const dashboardCardDetailStackTextStyle = {
  color: 'white',
  fontSize: 11,
  cursor: 'pointer',
  textDecoration: 'underline',
};
export const test = {};
