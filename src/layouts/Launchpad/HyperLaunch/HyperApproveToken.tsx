import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import InputAdornment from '@mui/material/InputAdornment';
import Image from "../../../components/Image"
import BigYtubeImg from "../../../assets/BigYtubeImg.png"
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton'
import HyperStepForm2 from './HyperPresaleInform';
import HyperStepForm3 from './HyperProjectInform';
import HyperStepForm4 from './HyperSubmit';
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ColorButton } from '../../../components/Button';
import { headingFont } from "../../../Fonts";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const HyperApproveToken = () => {

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#FFC0CB',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(242, 12, 236,0.6)' : '#65C466',
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const steps = [
    {
      id: 1,
      label: "Approve Token",
      subLable: "Enter the token address and approve",
    },
    {
      id: 2,
      label: "Presale Information",
      subLable:
        "Enter the Presale information, in case of trouble check our Docs",
    },
    {
      id: 3,
      label: "Project Information",
      subLable: "Add project links, description and select tie",
    },
    {
      id: 4,
      label: "Submit",
      subLable: "Submit your presale",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean; }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%', my: '3rem' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((o, index) => (
          <Step key={o.id} completed={completed[index]}>
            <ThemeProvider theme={headingFont}>
              <StepButton onClick={handleStep(index)}>
                <Typography
                  sx={{
                    fontWeight: { xs: '200', sm: '300', md: '600' },
                    fontSize: { xs: '13px', sm: '14px', md: '16px' },
                    lineHeight: "19px", color: 'white'
                  }}
                >
                  {o?.label}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                    opacity: 0.8, color: 'white'
                  }}
                >
                  {o?.subLable}
                </Typography>
              </StepButton>
            </ThemeProvider>
          </Step>
        ))}
      </Stepper>

      <Box>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* ........................................Steps_Pages............................................... */}
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {
                activeStep == 0 ?
                  <FormControl sx={{
                    display: "flex", flexDirection: 'column', columnGap: "5%",
                    backgroundColor: "#1D1F23", height: "", marginBottom: "3rem", borderRadius: "20px",
                    marginTop: { xs: '0', sm: '1rem', md: '2rem' },
                    padding: { xs: '1.2rem', md: '2rem', lg: '3rem' },
                  }}>
                    <Box sx={{ display: 'flex', mb: { xs: '0.6rem', md: '1rem' } }}>
                      <FormControl sx={{ display: 'flex', flex: '1', fontWeight: '100' }}>
                        <FormControlLabel label="Launch a stealth sole"
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />}
                        />
                      </FormControl>
                    </Box>
                    <TextField fullWidth id="outlined-basic" autoComplete="off" label="Token Address" sx={{ mb: '1rem' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end" color="primary">
                              <ColorButton sx={{ fontSize: { xs: '12px', sm: '13px', md: '14px' } }}>
                                Create Token
                              </ColorButton>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box sx={{ flex: 1, my: '1rem' }}>
                      <Image sx={{ borderRadius: '14px' }}
                        disabledEffect
                        visibleByDefault
                        alt="empty content"
                        src={BigYtubeImg}
                      />
                    </Box>
                  </FormControl>
                  :
                  activeStep == 1 ?
                    <HyperStepForm2 />
                    :
                    activeStep === 2 ?
                      <HyperStepForm3 />
                      :
                      <HyperStepForm4 />
              }
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}

export default HyperApproveToken
