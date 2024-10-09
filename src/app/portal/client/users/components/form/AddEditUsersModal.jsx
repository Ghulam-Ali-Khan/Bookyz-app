/* eslint-disable react/prop-types */
import { Box, StepLabel, Stepper } from '@mui/material';
import React, { useMemo, useState } from 'react';
import UserContext from '@/context/UserContext';
import { useGetCallingCodeTransformer } from '@/customHooks/useTransformers';
import { useGetCountryCallingCodesQuery } from '@/services/public/lookups';
import { usersStepsInfo } from '../../utilities/data';
import StyledStep from '@/app/common/components/StyledStep';
import BasicInfoForm from './BasicInfoForm';
import SettingForm from './SettingForm';
import WorkScheduleForm from './WorkScheduleForm';

function AddEditUsersModal({ toggleAddModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);

  // API HOOKS & TRANSFORMERS
  const { data: countryCodeLookups, isSuccess } = useGetCountryCallingCodesQuery();
  const callingCodeOptions = useGetCallingCodeTransformer(countryCodeLookups);

  const userContextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      userData,
      setUserData,
      callingCodeOptions,
      setError,
      error,
      toggleAddModal
    }),
    [activeStep, userData, callingCodeOptions, isSuccess, error, toggleAddModal]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      <Box className=" relative overflow-y-auto " sx={{ maxHeight: 'calc(100% - 60px)' }}>
        <Box className=" sticky bg-white top-0 w-full px-50 z-50" py={5}>
          <Stepper activeStep={activeStep}>
            {usersStepsInfo?.map((step, idx) => (
              <StyledStep key={step?.label}>
                <StepLabel error={error && idx === 0}>{step?.label}</StepLabel>
              </StyledStep>
            ))}
          </Stepper>
        </Box>

        <Box pb={4}>
          {activeStep === 0 && <BasicInfoForm />}

          {activeStep === 1 && <SettingForm />}

          {activeStep === 2 && <WorkScheduleForm />}
        </Box>
      </Box>
    </UserContext.Provider>
  );
}

export default AddEditUsersModal;
