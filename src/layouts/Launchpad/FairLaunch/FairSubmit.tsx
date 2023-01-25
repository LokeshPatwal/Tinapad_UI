import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ColorButton } from '../../../components/Button'
import Paragraph from '../../../components/Paragraph'

const FairSubmit = () => {
  return (
    <Box sx={{
      backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', borderRadius: '20px',
      marginTop: { xs: '0', sm: '1rem', md: '2rem' },
      padding: { xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem' },
    }}>
      <Stack spacing={1.2} sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Launch Type:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>BitcoinXYZ</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Sale Title:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Title</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Total Supply:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>100,000,000,000</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Presale Rate:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Value in Token</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Listing Rate:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Value in Token</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Softcap:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Hardcap:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Minimum Buy:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Maximum Buy:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Liquidity:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>100%</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Fundaraise Token:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Token Type</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Fundaraise Token:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>ETH</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Start Time [Local]:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>2022-11-26 18:00</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>End Time [Local]</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>2022-11-26 18:00</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Estimated Dex Listing Time [Local]:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF', textAlign: 'right' }}>2022-11-26 18:00</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Unused Token</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Burn / Refund</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem', marginBottom: '5rem', width: { xs: '100%', sm: '100%', md: '49%' } }}>
          <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>
            Liquidity Unlock Time:</Paragraph>
          <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>XX Days</Paragraph>
        </Stack>
      </Stack>

      <Stack spacing={1.2} marginTop={2}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Website:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Telegram:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Twitter:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Discord:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Github:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Reddit:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Twitter:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Reddit:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Youtube:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Tier:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Common / Gold</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Whitelist Content:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Anti Sniper Protection:
            </Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Yes / No</Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1.2, sm: 1.5, md: 2, lg: 2.5 }}>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%'
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem', columnGap: { xs: '8%', md: '12%' } }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Description:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF', textAlign: 'right' }}>Elrond Fight Championship is the bridge of art and value through NFTs and See More</Paragraph>
          </Stack>
          <Stack direction={'row'} display='flex' justifyContent='space-between' width='100%' sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: '0.4rem' }}>
            <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Sale Type:</Paragraph>
            <Paragraph sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Public / Whitelist</Paragraph>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ display: 'flex', columnGap: '1rem', justifyContent: { xs: 'center', sm: 'end' }, textAlign: 'right', mt: '3%' }}>
        <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back
        </ColorButton>
        <ColorButton sx={{ width: '8rem' }}>Complete</ColorButton>
      </Box>
    </Box >
  )
}

export default FairSubmit
