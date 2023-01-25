import * as React from 'react';
import { Box } from '@mui/system'
import Header from '../layouts/common/Header'
import Typography from '@mui/material/Typography'
import Paragraph from '../components/Paragraph'
import Question from '../components/Question'
import { KycFAQ } from '../_mocks/KycAuditFAQ'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../components/Image';
import DEFI from '../assets/DefiImg.png'
import { Divider } from '@mui/material';
import MoreIcon from '../components/MoreIcon';


const KYCAudits = () => {
  return (
    <>

      <Box mx='4%'>
        <Header />
      </Box>
      <Box sx={{ py: '2%', px: '5%', display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
        <Box sx={{ bgcolor: '#D9D9D9', height: '12rem', width: '100%' }}>Image</Box>
        <Box sx={{ textAlign: 'left', px: { xs: '1%', sm: '5%' } }}>
          <Box sx={{ mb: '4%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <Typography variant="h4" sx={{
                fontWeight: '600', fontSize: { xs: '30px', sm: '36px' }, lineHeight: '2rem'
              }}>KYC and KYC+ at GemPad</Typography>
              <MoreIcon />
            </Box>
            <Paragraph sx={{ fontWeight: '400', fontSize: '20px', lineHeight: { xs: '3rem', sm: '2rem' } }}>How to KYC With GemPad</Paragraph>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
            {
              KycFAQ.map((currQues, index) => (
                <Box>
                  <Question sx={{ fontWeight: '700', fontSize: '20px', mb: '1%' }}>{currQues.question}</Question>
                  <Question sx={{ fontWeight: '700', fontSize: '16px', lineHeight: '24px' }}>{currQues.subQuestion}</Question>
                  <Paragraph sx={{ fontWeight: '400', fontSize: '16px' }}>{currQues.answer}</Paragraph>
                </Box>
              ))
            }
            <Box>
              <Question sx={{ fontWeight: '700', fontSize: '20px', mb: '1%' }}>Why Does Assure Defi handle GemPad's KYC process?</Question>
              <Paragraph sx={{ fontWeight: '400', fontSize: '16px' }}>As part of GemPad’s commitment to Blockchain security, we have chosen Assure DeFi, the market leader, as our exclusive provider of KYC verification services. The base KYC+ verification cost is 1.5 BNB and is required for our Platinum, Diamond & Alpha tiers.
              </Paragraph>
              <Image sx={{ width: { xs: '95%', sm: '30%' } }}
                disabledEffect visibleByDefault
                alt="DEFI Image" src={DEFI}
              />
              <Paragraph sx={{ fontWeight: '400', fontSize: '16px', mb: '2%' }}>GemPad chose Assure Defi not only for their unmatched verification integrity, but for their extensive professional marketing, promotion, and advisory services, which have consistently yielded higher success launches for projects.</Paragraph>
              <Paragraph sx={{ fontWeight: '400', fontSize: '16px' }}>As part of GemPad’s goal of enabling the best project launch available, we are subsidizing and have negotiated significant discounts for all of Assure DeFi’s services. This allows you to easily tap into Assure’s deep experience in crypto/WEB3 & gain valuable guidance on how to get early traction in this highly competitive market. GemPad strongly recommends that you take advantage of Assure Defi’s professional services, to broadcast your credibility, and supercharge your project launch.</Paragraph>
              <Paragraph sx={{ fontWeight: '400', fontSize: '16px' }}>Project leaders can click here for more info on what Assure Defi offer.
              </Paragraph>
            </Box>
            <Box sx={{ mb: '2%' }}>
              <Question sx={{ fontWeight: '700', fontSize: '20px' }}>Note</Question>
              <Paragraph sx={{ fontWeight: '300', fontSize: '16px', fontStyle: 'italic' }}>We reserve the right to reveal identities for those wanting to file criminal charges if a project scams investors.</Paragraph>
            </Box>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: "100%", my: { xs: '8%', sm: '3%' } }}>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', border: '0.2px solid #B8B5B5', color: '#838181' }}>
              <Box sx={{ textAlign: 'right' }}>
                <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: 'white', opacity: '0.5', textTransform: 'capitalize' }}>Guide for project owners-previous</Paragraph>
                <Paragraph sx={{ fontWeight: '600', fontSize: '16px', color: 'white', textTransform: 'capitalize' }}>Finalize a  presale</Paragraph>
              </Box>
            </Button>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', border: '0.2px solid #B8B5B5', color: '#838181' }}>
              <Box sx={{ textAlign: 'left' }}>
                <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: 'white', opacity: '0.5', textTransform: 'capitalize' }}>Next-guide for project owners-previous</Paragraph>
                <Paragraph sx={{ fontWeight: '600', fontSize: '16px', color: 'white', textTransform: 'capitalize' }}>Telegram but bot</Paragraph>
              </Box>
            </Button>
          </Stack>
          <Box sx={{}}>
            <Divider />
            <Paragraph sx={{ opacity: '0.5', mt: '5%', textAlign: { xs: 'center', sm: 'left' } }}>Last modified 19d ago</Paragraph>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default KYCAudits
