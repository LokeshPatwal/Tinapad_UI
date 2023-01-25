import React, { useState } from 'react'
import { FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TokenImg from '../../../assets/TokenImg.png'
import Image from '../../../components/Image';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'


function createData(img: any, wrapped: string, WBNB: string, amount: string, view: string) {
  return { img, wrapped, WBNB, amount, view };
}

const tableData = [
  createData(TokenImg, 'Wrapped BNB/DEX Alert', 'WBNB/DXA', "3,325,837.927", 'View'),
  createData(TokenImg, 'Wrapped BNB/Ronaldox', 'WBNB/DXA', "3.307", 'View'),
  createData(TokenImg, 'Wrapped BNB/Visayl Swap', 'WBNB/DXA', "17,713.57", 'View'),
  createData(TokenImg, 'Wrapped BNB/Qatat Dogecoin', 'WBNB/DXA', "205.8", 'View'),
  createData(TokenImg, 'Wrapped BNB/Planetcats', 'WBNB/DXA', "0.00544", 'View'),
];

const OtherLiqLock = () => {
  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: '500', fontSize: '14px', pb: '3px', borderBottom: 'none' }}>Token</TableCell>
            <TableCell sx={{ fontWeight: '500', fontSize: '14px', pb: '3px', borderBottom: 'none' }}>Amount</TableCell>
            <TableCell sx={{ borderBottom: 'none' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', columnGap: '4%', px: '0px' }}>
                  <Image src={row.img} sx={{
                    textAlign: 'left', mx: { xs: '4%', md: '1%' },
                    width: { xs: '2rem', sm: '1.6rem', md: '2.5rem' },
                    height: { xs: '2rem', sm: '1.8rem', md: '0' }
                  }} />
                  <Box>
                    <Typography component="p" sx={{
                      fontWeight: '500',
                      fontSize: { xs: '10px', sm: '12px', md: '14px' }
                    }}>{row.wrapped}</Typography>
                    <Typography component="p" sx={{
                      fontWeight: '500',
                      fontSize: { xs: '10px', sm: '12px', md: '14px' }, opacity: '44%'
                    }}>{row.WBNB}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: { xs: '11px', sm: '12px', md: '14px' } }}>{row.amount}</TableCell>
                <TableCell sx={{ color: '#F20CEC', fontSize: { xs: '12px', sm: '12px', md: '14px' } }}>{row.view}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OtherLiqLock
