import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Select master',
    'Create an ad group',
    'Create an ad',
  ];

function componentStepper() {
  return (
    <div className="stepper">
        <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
</Stepper>
    </div>
    
  )
}

export default componentStepper