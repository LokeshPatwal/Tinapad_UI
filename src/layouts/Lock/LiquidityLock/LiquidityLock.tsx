import React, { useState } from "react";
import { Box, Stack, TextField } from '@mui/material'
import { ColorButton } from "../../../components/Button";
import GemPresaleLock from "./GemPresaleLock";
import OtherLiqLock from "./OtherLiqLock";
import MyGemPresaleLock from "./MyGemPresaleLock";
import MyOtherLiqlocks from "./MyOtherLiqlocks";
import Header from "../../common/Header";


const LiquidityLock = () => {

  const [gemPresaleLock, setGemPresaleLock] = useState(true);
  const [otherLiqLock, setOtherLiqLock] = useState(false);
  const [myGemPresaleLock, setMyGemPresaleLock] = useState(false);
  const [myOtherLiqlocks, setMyOtherLiqlocks] = useState(false);

  const onClickGemPresaleLockTab = () => {
    setGemPresaleLock(true);
    setOtherLiqLock(false);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(false);
  };

  const onClickOtherLiqLockTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(true);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(false);
  };

  const onClickMyGemPresaleLockTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(false);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(true);
  };

  const onClickMyOtherLiqlocksTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(false);
    setMyGemPresaleLock(true);
    setMyOtherLiqlocks(false);
  };


  return (
    <>

      <Box mx='4%'>
        <Header />
      </Box>
      <Box sx={{ backgroundColor: `${gemPresaleLock || otherLiqLock === true ? '#1D1F23' : ''}`, width: '92%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: { xs: '0', sm: '5%' }, pb: '1.2rem', borderRadius: '20px' }}>
        <Box>
          <Box sx={{ padding: { xs: '4%', sm: '0' } }}>
            {
              gemPresaleLock || otherLiqLock === true ?
                <TextField label="Search by LP Adress" autoFocus fullWidth sx={{ mt: '2rem' }} />
                : ''
            }
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3, md: 2 }} sx={{
            display: "flex", justifyContent: { xs: 'space-between', md: 'end' }, alignItems: "center",
            mt: { xs: '1rem', sm: '2rem', md: '2rem' }
          }}>
            <Stack direction='row' spacing={{ xs: 2, sm: 3, md: 2 }}>
              <ColorButton onClick={onClickGemPresaleLockTab} variant="contained"
                sx={{
                  fontSize: { xs: '11px', sm: '12px', md: '14px' },
                  bgcolor: `${gemPresaleLock === false ? 'transparent' : ''}`,
                  boxShadow: `${gemPresaleLock === false ? 'none' : ''}`,
                }}>
                Gem Presale Lock
              </ColorButton>
              <ColorButton onClick={onClickOtherLiqLockTab} variant="contained"
                sx={{
                  fontSize: { xs: '11px', sm: '12px', md: '14px' },
                  bgcolor: `${otherLiqLock === false ? 'transparent' : ''}`,
                  boxShadow: `${otherLiqLock === false ? 'none' : ''}`,
                }}>
                Other Liq Lock
              </ColorButton>
            </Stack>
            <Stack direction='row' spacing={{ xs: 1, sm: 3, md: 2 }}>
              <ColorButton onClick={onClickMyOtherLiqlocksTab} variant="contained"
                sx={{
                  fontSize: { xs: '11px', sm: '12px', md: '14px' },
                  bgcolor: `${myGemPresaleLock === false ? 'transparent' : ''}`,
                  boxShadow: `${myGemPresaleLock === false ? 'none' : ''}`,
                }}>
                My  Gem Presale Lock
              </ColorButton>
              <ColorButton onClick={onClickMyGemPresaleLockTab} variant="contained"
                sx={{
                  fontSize: { xs: '11px', sm: '12px', md: '14px' },
                  bgcolor: `${myOtherLiqlocks === false ? 'transparent' : ''}`,
                  boxShadow: `${myOtherLiqlocks === false ? 'none' : ''}`,
                }}>
                My Other Liq locks
              </ColorButton>
            </Stack>
          </Stack>

          <Box sx={{}}>
            {gemPresaleLock ? <GemPresaleLock /> : <></>}
            {otherLiqLock ? <OtherLiqLock /> : <></>}
            {myOtherLiqlocks ? <MyOtherLiqlocks /> : <></>}
            {myGemPresaleLock ? <MyGemPresaleLock /> : <></>}
          </Box>
        </Box>
      </Box >
    </>
  );

}

export default LiquidityLock
