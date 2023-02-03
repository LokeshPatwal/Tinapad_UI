import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormControl, FormGroup, MenuItem, Stack, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ColorButton } from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles.css'


const PresaleInformation = () => {
    const [formData, setFormData] = useState({
        saleTitle: '',
        totalSupply: '',
        fundRaisingToken: 'BNB',
        customFundRaising: '',
        presaleRate: '',
        dexListingRate: '',
        dexLiquidity: '',
        liquidityLocked: '',
        softCap: '',
        hardCap: '',
        minimumBuy: '',
        maximumBuy: '',
        startDate: '',
        endDate: '',
        estimatedDexListing: '',
        unsoldTokens: 'BNB',
        presaleType: 'BNB',
        whitelistTimer: '',
        stealthWallet: '',
    })
    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)


    const inputHandler = (e: any) => {
        console.log(e)
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const antiSniperProtection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitch1(event.target.checked)
        console.log(event.target.checked)
    }
    const teamTokenVesting = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitch2(event.target.checked)
        console.log(event.target.checked)
    }
    const addPresaleVesting = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitch3(event.target.checked)
        console.log(event.target.checked)
    }

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

    const FundRaisingArray = ['BNB', 'BUSD', 'Custom']

    return (
        // <ThemeProvider theme={theme}>
        <Box sx={{
            backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', borderRadius: '20px',
            marginTop: { xs: '0', sm: '1rem', md: '2rem' },
            padding: { xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem' },
        }}>
            <Stack spacing={3.2} sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth label="Sale Title" type="text" onChange={inputHandler} name='saleTitle' />
                    <TextField fullWidth label="Total Supply" type="text" onChange={inputHandler} name='totalSupply' className='FieldsetRemove' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth id="outlined-select-currency" select
                        name='fundRaisingToken'
                        onChange={inputHandler}
                        label="Fund Raising Token"
                        defaultValue='BNB'
                    >
                        {FundRaisingArray.map((option, index) => (
                            <MenuItem key={index} value={option} > {option} </MenuItem>
                        ))}
                    </TextField>
                    <TextField fullWidth label="Custom Fund Raising Token" type="text" onChange={inputHandler} name='customFundRaising' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth label="Presale Rate" type="text" onChange={inputHandler} name='presaleRate' />
                    <TextField fullWidth label="Dex Listing Rate" type="text" onChange={inputHandler} name='dexListingRate' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth label="Dex Liquidity [%]" type="text" onChange={inputHandler} name='dexLiquidity' />
                    <TextField fullWidth label="Liquidity Locked [Days]" type="text" onChange={inputHandler} name='liquidityLocked' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth label="Soft Cap [BNB]" type="text" onChange={inputHandler} name='softCap' />
                    <TextField fullWidth label="Hard Cap [BNB]" type="text" onChange={inputHandler} name='hardCap' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth label="Minimum Buy [BNB]" type="text" onChange={inputHandler} name='minimumBuy' />
                    <TextField fullWidth label="Maximum Buy [BNB]" type="text" onChange={inputHandler} name='maximumBuy' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth onChange={inputHandler} name='startDate'
                        id="datetime-local" label="Start Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30"
                    />
                    <TextField fullWidth onChange={inputHandler} name='endDate'
                        id="datetime-local" label="End Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <TextField fullWidth onChange={inputHandler} name='estimatedDexListing'
                        id="datetime-local" label="Estimated DEX Listing Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30" />
                    <TextField fullWidth id="outlined-select-currency" select
                        name='unsoldTokens'
                        onChange={inputHandler}
                        label="Select what happens to Unsold Tokens"
                        defaultValue="BNB"
                    >
                        {FundRaisingArray.map((option, index) => (
                            <MenuItem key={index} value={option} > {option} </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                    <Stack sx={{ width: '100%' }}>
                        <TextField fullWidth id="outlined-select-currency" select
                            name='presaleType'
                            onChange={inputHandler}
                            label="Presale Type"
                            defaultValue="BNB"
                        >
                            {FundRaisingArray.map((option, index) => (
                                <MenuItem key={index} value={option} > {option} </MenuItem>
                            ))}
                        </TextField>
                        <Paragraph sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem', fontSize: '12px', width: '100%' }}>Read more about Presale Type here Docs</Paragraph>
                    </Stack>
                    <TextField fullWidth label="Whitelist Timer" type="text" onChange={inputHandler} name='whitelistTimer' />
                </Stack>
                <Stack sx={{ width: { xs: '100%', md: '50%', lg: '49%' } }}>
                    <TextField label="Stealth Wallet" type="text" onChange={inputHandler} name='stealthWallet' />
                    <Paragraph sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem', fontSize: '12px' }}>Read more about Presale Type here Docs</Paragraph>
                </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} justifyContent="space-between">
                <FormControl>
                    <FormLabel component="legend" sx={{ textAlign: 'left' }}>Optional Features:</FormLabel>
                    <FormGroup>
                        <FormControlLabel sx={{ width: '100%' }}
                            name='antiSniperProtection'
                            control={<IOSSwitch sx={{ m: 1 }} checked={switch1} onChange={antiSniperProtection} />}
                            label="Anti Sniper Protection" />
                        <FormControlLabel sx={{ width: '100%' }}
                            name='teamTokenVesting'
                            control={<IOSSwitch sx={{ m: 1 }} checked={switch2} onChange={teamTokenVesting} />}
                            label="Add Team Token Vesting" />
                        <FormControlLabel
                            name='addPresaleVesting'
                            control={<IOSSwitch sx={{ m: 1 }} checked={switch3} onChange={addPresaleVesting} />}
                            label="Add Presale Vesting" />
                    </FormGroup>
                </FormControl>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', rowGap: '1rem',
                    justifyContent: 'end', mt: { xs: '3rem', sm: '1rem', lg: '0' }
                }}>
                    <Typography component="p" sx={{ color: '#FC9823', textAlign: { xs: 'center', md: 'right' } }}>
                        0 $coin Needed to Create Pool!
                    </Typography>
                    <Typography component="p" sx={{ color: '#F20CEC', textAlign: { xs: 'center', md: 'right' } }}>
                        Estimated Mcap 0$
                    </Typography>
                    <Box sx={{
                        display: 'flex', columnGap: '1rem', textAlign: 'right',
                        justifyContent: { xs: 'center', md: 'end' }
                    }}>
                        <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }} type='button'>Back
                        </ColorButton>
                        <ColorButton sx={{ width: '8rem' }} type='button' onClick={() => { console.table(formData) }}>Next</ColorButton>
                    </Box>
                </Box>
            </Stack>
        </Box>
        // </ThemeProvider>
    )
}

export default PresaleInformation
