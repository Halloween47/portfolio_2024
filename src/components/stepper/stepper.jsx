import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Prototype Numérique',
    'Designer Web',
    'Développeur Front-End JavaScript React',
    'Développeur Full Stack',
  ];

function componentStepper() {
  return (
    <div className="stepper">
        <Stepper activeStep={2} alternativeLabel>
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