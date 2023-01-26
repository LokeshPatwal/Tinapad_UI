import React from 'react'
import { Box, FormControl, FormGroup, TextField, Typography } from '@mui/material'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';

function createData(property: string, amount: string) {
  return { property, amount };
}

const tableData = [
  createData('Total Amount Locked:', '50,000,000,000'),
  createData('Total Value Locked:', '$ 5000'),
  createData('Token Address:', '0xeE32AefeB41678d750FD794B11403b0d3113509B'),
  createData('Token Name:', 'METATATE'),
  createData('Token Symbol:', 'CHI'),
  createData('Decimal:', '18'),
  createData('Owner:', '0xeE32AefeB41678d750FD794B11403b0d3113509B'),
];


function createLockData(token: string, lockTime: string, unlockTime: string) {
  return { token, lockTime, unlockTime };
}

const lockRecordData = [
  createLockData('5,000,000,000', '2022-11-26 18:00', '2022-11-26 18:00'),
  createLockData('5,000,000,000', '2022-11-26 18:00', '2022-11-26 18:00'),
  createLockData('5,000,000,000', '2022-11-26 18:00', '2022-11-26 18:00'),
];

const MyOtherLiqlocks = () => {
  return (
    <Box>
      <Box sx={{
        backgroundColor: '#1D1F23', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins', mb: '1rem',
        width: { xs: '96%', sm: '90%', md: '80%', lg: '65%' }
      }}>
        <Table sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
          <TableBody>
            <FormLabel sx={{
              fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left',
              mb: '1rem',
            }}>Lock Info</FormLabel>
            {
              tableData.map((row, index) => (
                <TableRow key={index} sx={{
                  display: 'flex', flex: '1', px: '0'
                }}>
                  <TableCell sx={{ display: 'flex', flex: 1, opacity: '0.6', fontWeight: '400', fontSize: '12px', py: { xs: '0.4rem', sm: '0.8rem' }, px: '0' }}>{row.property}</TableCell>
                  <TableCell sx={{ display: 'flex', flex: 1, fontWeight: '400', fontSize: '12px', justifyContent: 'end', py: { xs: '0.4rem', sm: '0.8rem' }, px: '0', overflowWrap: 'anywhere', textAlign: 'right' }}>{row.amount}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Box>
      <Box sx={{
        backgroundColor: '#1D1F23', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', mb: '2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins',
        width: { xs: '96%', sm: '90%', md: '80%', lg: '65%' }
      }}>
        <TableContainer sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
          <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left' }}>
            Lock Record</FormLabel>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight: '500', fontSize: '14px', pb: '3px', opacity: '0.6', px: '0px' }}>Token</TableCell>
                <TableCell sx={{ fontWeight: '500', fontSize: '14px', pb: '3px', opacity: '0.6', px: '0px', pl: { xs: '3%', sm: '15%' }, textAlign: 'center' }}>Lock Time</TableCell>
                <TableCell sx={{ fontWeight: '500', fontSize: '14px', pb: '3px', opacity: '0.6', px: '0px', pl: { xs: '3%', sm: '15%' }, textAlign: 'center' }}>Unlock Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                lockRecordData.map((row, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ px: '0px', fontWeight: '400', fontSize: '12px', py: { xs: '0.4rem', sm: '0.8rem' } }}>
                      {row.token}</TableCell>
                    <TableCell sx={{ px: '0px', fontWeight: '400', fontSize: '12px', textAlign: 'right', py: { xs: '0.4rem', sm: '0.8rem' } }}>
                      {row.lockTime}</TableCell>
                    <TableCell sx={{ px: '0px', fontWeight: '400', fontSize: '12px', textAlign: 'right', py: { xs: '0.4rem', sm: '0.8rem' } }}>
                      {row.unlockTime}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box >
  )
}

export default MyOtherLiqlocks
