import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function VerticalLinearStepper({ experienceList }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepperRef = React.useRef(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClickOutside = (event) => {
    if (stepperRef.current && !stepperRef.current.contains(event.target)) {
      handleReset();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const isSingleExperience = experienceList.length === 1;

  return (
    <Box ref={stepperRef} sx={{ padding: '0 20px' }}>
        <Typography variant="h4">Experience</Typography>
      {isSingleExperience ? (
        <Box>
          <Typography variant="h6">{experienceList[0].label}</Typography>
          <Typography>{experienceList[0].description}</Typography>
          <Button onClick={handleReset} sx={{ mt: 2 }}>
            Reset
          </Button>
        </Box>
      ) : (
        <Stepper activeStep={activeStep} orientation="vertical">
          {experienceList.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === experienceList.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.companyName}</Typography>
                <Typography>{step.description}</Typography>
                <Typography>{step.jobTitle}</Typography>
                <Typography>{step.startDate} : {step.endDate}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === experienceList.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      )}
      {activeStep === experienceList.length && !isSingleExperience && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
