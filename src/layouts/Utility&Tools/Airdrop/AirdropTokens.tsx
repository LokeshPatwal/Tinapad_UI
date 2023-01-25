import React, { useState } from 'react'
import { ButtonBase, FormControl, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import { ColorButton } from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';

function createData(property: string, amount: string) {
  return { property, amount };
}

const tableData = [
  createData('Name:', 'Ethereum Token'),
  createData('Symbol:', 'ETH'),
  createData('Balance:', '1000'),
  createData('Allowance:', '10'),
];


const AirdropTokens = () => {

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
          backgroundColor: theme.palette.mode === 'dark' ? '#F20CEC' : '#65C466',
          opacity: 0.15,
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

    <FormControl sx={{ width: '100%', mt: '5%' }}>
      <TextField id="outlined-required"
        label="Token or LP Token Adress"
        defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
      />
      <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FC9823', textAlign: 'left', mt: '2%', overflowWrap: 'break-word' }}>Whitelist <Typography component="span" sx={{ fontWeight: '700', fontSize: '12px' }}>(0x7CAf1cFF4d827D4784255122a02b276389bfDC4B)</Typography> from fees and maxTx limits!
      </Paragraph>
      <Table sx={{ my: '2rem' }}>
        <TableBody>
          {
            tableData.map((row, index) => (
              <TableRow key={index} sx={{ display: 'flex', flex: '1', px: '0' }}>
                <TableCell sx={{ opacity: '0.6', fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1', py: { xs: '0.4rem', sm: '0.8rem' }, px: '0' }}>{row.property}</TableCell>
                <TableCell sx={{ fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1', justifyContent: 'end', py: { xs: '0.4rem', sm: '0.8rem' }, px: '0' }}>{row.amount}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <FormGroup>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />}
          label="Anti Sniper Protection"
        />
      </FormGroup>
      <FormGroup sx={{ my: '1rem', display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <TextField id="outlined-required"
          label="Token or LP Token Adress"
          defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={3}
          defaultValue="Default Value"
        />
      </FormGroup>
      <ColorButton sx={{ width: 'fit-content', mx: 'auto', px: { xs: '14%', sm: '8%' }, mt: '1rem' }}>ok</ColorButton>
    </FormControl >

  )
}

export default AirdropTokens

