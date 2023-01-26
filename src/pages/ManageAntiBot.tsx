import React from 'react'
import { Box, FormControl, FormGroup, FormLabel, TextField } from '@mui/material'
import Header from '../layouts/common/Header';


const ManageAntiBot = () => {
    return (
        <>

            <Box mx='4%'>
                <Header />
            </Box>
            <Box sx={{
                backgroundColor: '#1D1F23', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '5%', pb: '1.5rem', borderRadius: '20px', my: '2rem',
                width: { xs: '92%', sm: '90%', md: '80%', lg: '65%' }
            }}>
                <FormControl sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                    <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left', mb: '4%' }}>Manage Anti Bot</FormLabel>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
                        <TextField autoFocus
                            id="outlined-required"
                            label="Token  Adress"
                            placeholder="EX: 0xeE"
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default ManageAntiBot
