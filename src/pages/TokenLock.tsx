import React, { useState } from 'react'
import { FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Bitcoinimg from '../assets/Bitcoin.png';
import Image from '../components/Image';
import Header from '../layouts/common/Header';


const TokenLock = () => {
    const [opentab, setOpentab] = useState('All')

    return (
        <>
            <Box mx='4%'>
                <Header />
            </Box>
            <Box sx={{
                backgroundColor: '#1D1F23', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins', mb: '1rem',
                width: { xs: '92%', sm: '90%', md: '80%', lg: '65%' }
            }}>
                <FormControl sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                    <FormLabel sx={{
                        fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left',
                        mb: { xs: '8%', sm: '4%' }
                    }}>
                        Token Locks </FormLabel>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
                        <TextField id="outlined-required"
                            label="Token or LP Token Adress"
                            defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
                        />
                        <Box sx={{ display: 'flex', columnGap: '2%', justifyContent: 'end' }}>
                            <Button onClick={() => { setOpentab('All') }}
                                sx={{
                                    textTransform: 'capitalize', height: 'fit-content', color: 'white', borderRadius: '15px',
                                    bgcolor: `${opentab === 'All' ? "#F20CEC" : ""}`,
                                    "&:hover": { bgcolor: '#F20CEC' }
                                }}>All</Button>
                            <Button onClick={() => { setOpentab('My Lock') }}
                                sx={{
                                    textTransform: 'capitalize', height: 'fit-content', color: 'white', borderRadius: '15px',
                                    bgcolor: `${opentab === 'My Lock' ? "#F20CEC" : ""}`,
                                    "&:hover": { bgcolor: '#F20CEC' }
                                }}>My Lock</Button>
                        </Box>
                    </FormGroup>
                    {
                        opentab === 'All' ?
                            <Box>
                                <Box sx={{ display: 'flex', color: 'white', columnGap: '44%', mb: '4%' }}>
                                    <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Token</Typography>
                                    <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Amount</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                            <Box>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                            </Box>
                                        </Box>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                            <Box>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                            </Box>
                                        </Box>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                            <Box>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                            </Box>
                                        </Box>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                            <Box>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                                <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                            </Box>
                                        </Box>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            :
                            <Box> My Lock</Box>

                    }
                </FormControl>
            </Box>
        </>
    )
}

export default TokenLock
