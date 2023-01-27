import React, { useState } from 'react'
import { Autocomplete, Box, FormGroup, FormLabel, TextField, Typography, Stack, Divider } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import AirdropTokens from '../layouts/Utility&Tools/Airdrop/AirdropTokens';
import AirdropETH from '../layouts/Utility&Tools/Airdrop/AirdropETH';
import FormControl from '@mui/material/FormControl';
import Header from '../layouts/common/Header';
import { ColorButton } from '../components/Button';
import ErrorIcon from '@mui/icons-material/Error';


const PresaleCalculator = () => {
    const fundRaisingArray = [
        { label: 'BNB' },
        { label: 'BUSD' },
        { label: 'Custom' },
    ]
    return (
        <>
            <Header />
            <Box sx={{
                backgroundColor: '#1D1F23', width: '92%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '2rem', borderRadius: '20px', my: '2rem'
            }}>

                <Stack spacing={3.2} sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                    <Autocomplete fullWidth options={fundRaisingArray} autoSelect
                        renderInput={(params) => <TextField {...params} label="Fund Raising Token" />}
                    />
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Hardcap" type="text" defaultValue="0" />
                        <TextField fullWidth label="Total Raised Expectation" type="text" defaultValue="0" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Total Supply" type="text" defaultValue="0" />
                        <TextField fullWidth label="Pool Vesting Amount" type="text" defaultValue="0" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Presale Rate" type="text" defaultValue="0" />
                        <TextField fullWidth label="Dex Listing Rate" type="text" defaultValue="0" />
                    </Stack>
                    <TextField label="Liquidity Percentage on Dex" type="text" defaultValue="0" sx={{ width: { xs: '100%', md: '50%', lg: '49%' } }} />
                    <Divider />
                    <ColorButton fullWidth sx={{
                        fontWeight: '500', lineHeight: '15px', textAlign: { xs: 'center', md: 'left' }, border: '1px solid rgba(255, 255, 255, 0.25)', marginX: 'auto', textTransform: 'initial', opacity: '0.74',
                        marginY: { xs: '0', sm: '3%' },
                        padding: { xs: '4%', sm: '2%', md: '1.2%' },
                        fontSize: { xs: '12px', md: '14px' },
                    }}>
                        <ErrorIcon sx={{ mr: '1rem' }} />  It doesn't work!
                    </ColorButton>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Tokens needed for your presale" type="text" defaultValue="0" />
                        <TextField fullWidth label="% of total supply you will use" type="text" defaultValue="% 100" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Tokens for Presale" type="text" defaultValue="0" />
                        <TextField fullWidth label="Raise Token for Liquidity" type="text" defaultValue="0" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Tokens for Liquidity: " type="text" defaultValue="0" />
                        <TextField fullWidth label="Total Raise Token you'll get to your wallet:" type="text" defaultValue="0" />
                    </Stack>
                    <TextField label="Estimated Market Cap" type="text" defaultValue="$ 0" sx={{ width: { xs: '100%', md: '50%', lg: '49%' } }} />
                </Stack>

            </Box>
        </>
    )
}

export default PresaleCalculator
