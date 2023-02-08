import React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import Image from "../../../components/Image";
import btcImg from "../../../assets/Bitcoin.png";
import ETHImg from "../../../assets/ETH.png";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import notifyImg from "../../../assets/bell.png";
import heartImg from "../../../assets/Heart.png";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { headingFont } from "../../../Fonts";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Avatar from '@mui/material/Avatar';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "" : "#F20CEC",
  },
}));


const Card = (props: any) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      width: { xs: '305px', sm: '342px', md: '342px', lg: '352px' },
      height: { xs: '298px', sm: '322px', md: '322px', lg: '332px' },
      borderRadius: "25px",
      mb: 4, mx: 'auto',
      position: 'relative'
    }}>
      {
        props?.explore?.badge ?
          <Chip label={props?.explore?.badge} avatar={<Avatar alt="tier" src={props.explore.goldtierimg} />}
            sx={{ borderRadius: '5px', position: "absolute", top: -15, right: 12, color: 'white', bgcolor: `${props.explore.badgebg}`, fontWeight: '500', fontSize: '12px', fontStyle: 'normal', height: '30px', p: 0 }} />
          :
          " "
      }
      <Box sx={{ height: { xs: '90%', sm: '85%' }, width: { xs: '90%', sm: '85%' } }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box>
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={btcImg}
              sx={{ height: 40, mt: 1 }}
            />
          </Box>
          <Box>
            <ThemeProvider theme={headingFont}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                textAlign: "start",
              }}>
                {props?.explore?.title}
              </Typography>
            </ThemeProvider>
            {
              props?.explore?.tags.map((item: any) => (
                <Chip key={item.id} label={item} size="small" color="success" />

              ))
            }
          </Box>
        </Box>

        <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
            textAlign: "start",
            mt: 1,
          }}>
            Max Contribution:{props?.explore?.maxContribution}
          </Typography>

          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={ETHImg}
            sx={{ height: 30 }}
          />
        </Box>

        <Typography sx={{
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "15px",
          textTransform: "capitalize",
          textAlign: "start",
          mt: 1,
        }}
        >
          Progress [25%]
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <BorderLinearProgress variant="determinate" value={25} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              lineHeight: "12px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            0 ETH
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              lineHeight: "12px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            10 ETH
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Hard Cap:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            $ {props?.explore?.hardcap}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Liquidity:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            {props?.explore?.liquidity} %
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Lock Time:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            {props?.explore?.lockTime} Days
          </Typography>
        </Box>
        <Divider sx={{ width: "100%", mt: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: { xs: '5px', sm: '12px', md: '10px' },
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
            >
              Sale Starts In:
            </Typography>
            <Typography sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              color: '#F20CEC',
              mt: { xs: '4px', md: '2px' },
            }}
            >
              00:00:00:00
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={notifyImg}
              sx={{ height: { xs: 30, md: 25 }, mt: { xs: 0.4, sm: 0.8, md: 0.6, lg: 1 } }}
            />
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={heartImg}
              sx={{ height: { xs: 30, md: 25 }, mt: { xs: 0.4, sm: 0.8, md: 0.6, lg: 1 } }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
