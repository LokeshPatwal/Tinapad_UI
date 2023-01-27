import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// import { ColorButton } from '../../../components/Button';
import CalendarIcon from '../../../assets/CalendarIcon.png'
import { ColorButton } from '../components/Button';
import Header from '../layouts/common/Header';
import Stack from '@mui/material/Stack';
import Paragraph from '../components/Paragraph';


const CreateToken = () => {

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

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },]

    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: '#1D1F23', width: '92%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1rem', borderRadius: '20px', my: '2rem', fontFamily: 'Poppins' }}>
                <Stack direction={{ xs: 'column' }} spacing={3} sx={{ mt: { xs: '1.6rem', sm: '1rem', md: '0' } }}>
                    <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left' }}>Create Token</FormLabel>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <Autocomplete fullWidth disablePortal options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Token Type" helperText="FEE: 1BNB" />} />
                        <TextField fullWidth label="Token Name" type="text" defaultValue="Token Name" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Token Symbol" type="text" defaultValue="Token Symbol" />
                        <TextField fullWidth label="Token Decimal" type="text" defaultValue="Token Decimal" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Total Supply" type="text" defaultValue="Total Supply" />
                        <TextField fullWidth label="Max Wallet" type="text" defaultValue="Ex. 10,000,000" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Max Transaction Amount" type="text" defaultValue="Ex. 10,000,000" />
                        <Autocomplete fullWidth disablePortal options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Router" />} />
                    </Stack>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.4rem', pl: '2%' }}>
                        <Paragraph sx={{ textAlign: 'left', fontSize: '12px', fontWeight: '400' }}>Base Token
                        </Paragraph>
                        <Stack direction='row' spacing={1}>
                            <Paragraph sx={{ textAlign: 'left', fontSize: '12px', fontWeight: '400' }}>BNB:</Paragraph>
                            <Typography component="span" sx={{ fontWeight: '700', color: '#F47459', fontSize: '12px', overflowWrap: 'anywhere' }}>0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1}>
                            <Paragraph sx={{ textAlign: 'left', fontSize: '12px', fontWeight: '400' }}>BUSD:</Paragraph>
                            <Typography component="span" sx={{ fontWeight: '700', color: '#F20CEC', fontSize: '12px', overflowWrap: 'anywhere' }}>0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c</Typography>
                        </Stack>

                    </Stack>
                    <TextField label="Select Any of One Above" type="text" sx={{ width: { xs: '100%', md: '49%' } }} />
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />}
                            label="Marketing fee in BNB instead of token" />
                    </FormGroup>
                    <TextField label="Marketing Wallet" type="text" defaultValue="ex.0xeE32AefeB41678d750FD794B11403b0d3113509B" sx={{ width: { xs: '100%', md: '49%' } }}
                    />
                    <Typography component="p" sx={{ textAlign: 'left', fontSize: '12px', fontWeight: '400', color: '#FC9823' }}>Max fee together can't be more than <Typography component="span" sx={{ fontWeight: '700', fontSize: '12px' }}>20%</Typography>
                        . (Fee decimals is 1.)
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Sell Liquidity Fee [%]" defaultValue="0-20%" type="text" />
                        <TextField fullWidth label="Sell Marketing Fee [%]" defaultValue="0-20" type="text" />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
                        <TextField fullWidth label="Buy Liquidity Fee [%]" defaultValue="0-20" type="text" />
                        <TextField fullWidth label="Buy Marketing Fee [%]" defaultValue="0-20" type="text" />
                    </Stack>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />}
                            label="Implement Anti-Bot" />
                    </FormGroup>
                    <Box>
                        <ColorButton sx={{ display: 'flex', justifyContent: 'center', mx: 'auto', px: { xs: '5%', md: '2%' }, width: 'fit-content' }}>Create Token</ColorButton>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default CreateToken
