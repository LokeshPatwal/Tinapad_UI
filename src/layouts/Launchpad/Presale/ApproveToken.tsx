import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Image from "../../../components/Image";
import Form_youtubeImg from "../../../assets/Form_youtube.png";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import { ColorButton } from "../../../components/Button";
import StepForm2 from "./PresaleInformation";
import StepForm3 from "./ProjectInformation";
import StepForm4 from "./Submit";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'
import Paragraph from "../../../components/Paragraph";
import { headingFont } from "../../../Fonts";
import ThemeProvider from "@mui/material/styles/ThemeProvider";


function createData(property: string, amount: string) {
  return { property, amount };
}

const tableData = [
  createData('Token Name:', 'BitcoinXYZ'),
  createData('Symbol:', 'BXYZ'),
  createData('Total Supply:', '100,000,000,000'),
];

export default function ApproveToken() {
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
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );

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
    <Box sx={{ width: "100%", my: "3rem" }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((o, index) => (
          <Step key={o.id} completed={completed[index]}>
            <ThemeProvider theme={headingFont}>
              <StepButton onClick={handleStep(index)}>
                <Typography
                  sx={{
                    fontWeight: { xs: '200', sm: '300', md: '600' },
                    fontSize: { xs: '13px', sm: '14px', md: '16px' },
                    lineHeight: "18px", color: 'white'
                  }}
                >
                  {o?.label}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontWeight: "400", color: 'white',
                    fontSize: "10px",
                    lineHeight: "12px",
                    opacity: 0.8,
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
            {/* ...........................PagesStepper........................................................... */}
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {
                activeStep == 0 ? (
                  <FormControl sx={{
                    display: "flex", flexDirection: { xs: "column", sm: "column", md: 'row', lg: 'row' },
                    backgroundColor: "#1D1F23", height: "", marginBottom: "3rem", borderRadius: "20px",
                    columnGap: "5%",
                    marginTop: { xs: '0', sm: '1rem', md: '2rem' },
                    padding: { xs: '1.2rem', md: '2rem', lg: '3rem' },
                  }}>
                    <Box sx={{ display: "flex", flex: "2", flexDirection: "column", rowGap: "2rem" }}>
                      <TextField fullWidth id="outlined-basic" autoComplete="off" label="Token Address"
                        sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' }, display: 'flex', }}
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
                      <Table>
                        <TableBody>
                          {
                            tableData.map((row, index) => (
                              <TableRow key={index} sx={{ display: 'flex', flex: '1', px: '0' }}>
                                <TableCell sx={{ opacity: '0.6', fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1', py: '0.8rem', px: '0' }}>{row.property}</TableCell>
                                <TableCell sx={{ fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1', justifyContent: 'end', py: '0.8rem', px: '0' }}>{row.amount}</TableCell>
                              </TableRow>
                            ))
                          }
                        </TableBody>
                      </Table>
                      <Box sx={{ display: "flex", flex: "1", flexDirection: "column", justifyContent: "space-between", mt: '1rem' }}>
                        <ColorButton sx={{ fontWeight: "700", float: "left", width: { xs: '6rem', md: '8rem' } }}>
                          Approve
                        </ColorButton>
                        <Paragraph sx={{ fontWeight: "400", fontSize: '12px', color: "#FC9823", mt: '2%', width: '100%', display: "inline-block" }}>Make sure token has <Paragraph sx={{ fontSize: '12px', fontWeight: '700', display: 'inline' }}>“Exclude transfer fee”</Paragraph> and <Paragraph sx={{ fontSize: '12px', fontWeight: '700', display: 'inline' }}>“Exclude Max Transaction”</Paragraph> if you use tax/Fees or Max Transaction limits.</Paragraph>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flex: "1", mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                      <Image sx={{ borderRadius: "18px", height: "62%", width: "100%" }}
                        disabledEffect
                        visibleByDefault
                        alt="empty content"
                        src={Form_youtubeImg}
                      />
                    </Box>
                  </FormControl>
                ) : activeStep == 1 ? (
                  <StepForm2 />
                ) : activeStep === 2 ? (
                  <StepForm3 />
                ) : (
                  <StepForm4 />
                )}
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box >
  );
}
