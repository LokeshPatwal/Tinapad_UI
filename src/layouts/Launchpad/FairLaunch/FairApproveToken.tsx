import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Image from "../../../components/Image"
import BigYtubeImg from "../../../assets/BigYtubeImg.png"
import IconButton from '@mui/material/IconButton';
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ColorButton } from '../../../components/Button';

const FairApproveToken = () => {
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
  )
}

export default FairApproveToken
