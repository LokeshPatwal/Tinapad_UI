import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, FormControl, FormGroup, MenuItem, Stack, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ColorButton } from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';

const HyperPresaleInform = () => {

  const FundRaising = ['BNB', 'BUSD', 'Custom']

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


  return (
    <Box sx={{
      backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', borderRadius: '20px',
      marginTop: { xs: '0', sm: '1rem', md: '2rem' },
      padding: { xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem' }, marginBottom: '3rem'
    }}>
      <Stack spacing={3.2} sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
        <TextField id="outlined-required" label="Sale Title" defaultValue="Type Input Here" />
        <TextField id="outlined-required" label="Total Supply" />
        {/* <Autocomplete disablePortal options={FundRaising} sx={{ display: 'flex', flex: '1' }}
          renderInput={(params) => <TextField {...params} label="Fund Raising Token" />} /> */}
        <TextField id="outlined-select-currency" select
          label="Select"
          defaultValue="BNB"
        >
          {FundRaising.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ width: '100%' }}>
          <TextField id="outlined-required" label="Presales Amount" sx={{ display: 'flex', flex: '1' }} />
          <Paragraph sx={{ color: '#F20CEC', textAlign: 'left', mt: '0.4rem', fontWeight: '400', fontSize: '13px' }}>Total amount of tokens for hyper launch</Paragraph>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField label="Dex Listing Rate" type="text" sx={{ display: 'flex', flex: '1' }} />
          <TextField label="Liquidity Locked [Days]" type="text" sx={{ display: 'flex', flex: '1' }} defaultValue="Liquidity Locked [Days]" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField label="Soft Cap [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
          <TextField label="Maximum Contributors" type="text" sx={{ display: 'flex', flex: '1' }} defaultValue="0" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1.1, sm: 1.5, md: 2, lg: 3 }}>
          <TextField label="Minimum Buy [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="Add maximum buy limit" sx={{ display: 'flex', flex: '1' }} />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField id="outlined-required" label="Start Date [UTC]" defaultValue="12/27/2022 02:14 pm" sx={{ display: 'flex', flex: '1' }} />
          <TextField id="outlined-required" label="End Date [UTC]" defaultValue="26/36/22" sx={{ display: 'flex', flex: '1' }} />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField id="outlined-required" label="Estimated Dex Listing Date (UTC)" defaultValue="12/27/2022 02:14 pm" sx={{ display: 'flex', flex: '1' }} />
          <TextField id="outlined-required" label="Select what happens to Unsold Tokens" defaultValue="Burn" sx={{ display: 'flex', flex: '1' }}
          />
        </Stack>

        <TextField id="outlined-required" label="*UTC Time is displayed" defaultValue="Read more about Presale Type here Docs"
          sx={{ display: 'flex', flex: '1' }} />
        <Autocomplete options={FundRaising} renderInput={(params) => <TextField {...params} label="Presales" />} sx={{ display: 'flex', flex: '1' }} />
        <TextField id="outlined-required" defaultValue="Tip: Use another (stealth) wallet for uploading the tokens & finalization." label="Presale Type" sx={{ display: 'flex', flex: '1' }} />
        <TextField id="outlined-required" label="Presales Type" defaultValue="Stealth wallet"
          sx={{ display: 'flex', flex: '1' }} />
      </Stack>
      <ColorButton sx={{
        fontWeight: '500', lineHeight: '15px', textAlign: 'left', border: '1px solid rgba(255, 255, 255, 0.25)', width: 'fit-content', marginX: 'auto', textTransform: 'initial', opacity: '0.74',
        marginY: { xs: '0', sm: '4%' },
        padding: { xs: '4%', sm: '2%', md: '1.2%' },
        fontSize: { xs: '10px', sm: '12px', md: '14px' },
      }}>
        Lock your team tokens with a vesting schedule for further transparency and trust.
      </ColorButton>

      <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} justifyContent="space-between">
        <FormControl>
          <FormLabel component="legend" sx={{ textAlign: 'left' }}>Optional Features:</FormLabel>
          <FormGroup>
            <FormControlLabel sx={{ width: '100%' }}
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="Anti Sniper Protection" />
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="Add Team Token Vesting" />
          </FormGroup>
        </FormControl>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', justifyContent: 'end', mt: { xs: '3rem', sm: '1rem', lg: '0' } }}>
          <Typography component="p" sx={{ color: '#FC9823', textAlign: { xs: 'center', md: 'right' }, display: { xs: 'block', md: 'none' } }}>
            0 $coin Needed to Create Pool!
          </Typography>
          <Typography component="p" sx={{ color: '#F20CEC', textAlign: { xs: 'center', md: 'right' } }}>
            Estimated Mcap 0$
          </Typography>
          <Box sx={{
            display: 'flex', columnGap: '1rem', textAlign: 'right',
            justifyContent: { xs: 'center', sm: 'center', md: 'end' }
          }}>
            <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back</ColorButton>
            <ColorButton sx={{ width: '8rem' }}>Next</ColorButton>
          </Box>
        </Box>
      </Stack>
    </Box >
  )
}

export default HyperPresaleInform
