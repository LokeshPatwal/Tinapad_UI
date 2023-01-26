import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import { ColorButton } from '../../../components/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Paragraph from '../../../components/Paragraph';

const FairProjectInform = () => {
  const [card, setCard] = React.useState('')

  return (
    <Box sx={{
      backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', borderRadius: '20px',
      marginTop: { xs: '0', sm: '1rem', md: '2rem' },
      padding: { xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem' },
    }}>
      <Stack spacing={3.2} sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <Stack sx={{ width: '100%' }}>
            <TextField label="Logo URL" type="text" />
            <Paragraph sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem', fontSize: '12px' }}>URL must end with a supported image extension png, jpg, jpeg or gif. You can upload your image on https://postimages.org/
            </Paragraph>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <TextField fullWidth label="Cover Banner" type="text" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </InputAdornment>
              ),
            }} />
            <Paragraph sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem', fontSize: '12px' }}>*Not Required
            </Paragraph>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField fullWidth label="Website" type="text" />
          <TextField fullWidth label="Telegram" type="text" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField fullWidth label="Github" type="text" />
          <TextField fullWidth label="Twitter" type="text" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField fullWidth label="Discord" type="text" />
          <TextField fullWidth label="Youtube " type="text" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={3}>
          <TextField fullWidth label="Whitelist Contest" type="text" />
          <TextField fullWidth label="Reddit" type="text" />
        </Stack>
        <TextField multiline id="outlined-multiline-static"
          label="Description"
          rows={4}
          placeholder="Description Text Here"
        />
        <fieldset style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <legend style={{ textAlign: 'left' }}>Select Tier</legend>
          <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} spacing={2}
            sx={{ display: 'flex', alignItems: 'center' }}>
            <Card onClick={() => { setCard('Normal') }} sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '22px', cursor: 'pointer',
              width: { xs: '13rem', sm: '13rem', md: '12rem' },
              height: { xs: '13rem', sm: '13rem', md: '12rem' },
              border: `${card === 'Normal' ? '1px solid blue' : ''}`
            }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '100' }} >
                  Common Tier
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '100', textAlign: 'center', color: 'white' }} >
                  Common Tier without any special Perks
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F20CEC' }} >
                  Fee 0.1 ETH
                </Typography>
              </CardContent>
            </Card>
            <Card onClick={() => { setCard('Gold') }} sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '22px', cursor: 'pointer',
              width: { xs: '13rem', sm: '13rem', md: '12rem' },
              height: { xs: '13rem', sm: '13rem', md: '12rem' },
              border: `${card === 'Gold' ? '1px solid yellow' : ''}`
            }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '100' }} >
                  Gold
                </Typography>
                <Box sx={{ fontSize: '14px', fontWeight: '100' }} >
                  <Typography component="p" sx={{ fontSize: '14px', fontWeight: '100' }}>-Gold Border</Typography>
                  <Typography component="p" sx={{ fontSize: '14px', fontWeight: '100' }}>-Audit Option</Typography>
                  <Typography component="p" sx={{ fontSize: '14px', fontWeight: '100' }}>-KYC Option</Typography>
                </Box>
                <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F20CEC' }} >
                  Fee 0.2 ETH
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </fieldset>
        <Paragraph sx={{ color: '#FC9823', textAlign: 'left', fontSize: '12px' }}>You can contact us for a higher tier or apply here after you create your presale.
        </Paragraph>
      </Stack >
      <Box sx={{ display: 'flex', columnGap: '1rem', justifyContent: { xs: 'center', sm: 'center', md: 'end' }, textAlign: 'right', mt: '5%' }}>
        <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back
        </ColorButton>
        <ColorButton sx={{ width: '8rem' }}>Next</ColorButton>
      </Box>
    </Box >
  )
}

export default FairProjectInform
