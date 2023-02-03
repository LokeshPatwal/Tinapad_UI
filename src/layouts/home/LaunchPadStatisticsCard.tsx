import { Box, CardActions, ThemeProvider, Typography } from "@mui/material";
import Image from "../../components/Image";
import { headingFont } from "../../Fonts";
import Graph from "./Graph";

const LaunchPadStatisticsCard = (props: any) => {
  console.log(props)
  return (
    <Box sx={{
      background: 'linear-gradient(268.6deg, rgba(38, 42, 51, 1) 0.73%, rgba(27,30,37,0.5) 98.81%)',
      backgroundRepeat: "no-repeat",
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '25px',
      height: '177px',
      width: { xs: '100%', sm: '270px' },
      mx: 'auto',
      my: '5px',
      position: 'relative',
    }}>
      <ThemeProvider theme={headingFont}>
        <Box sx={{ position: 'relative', top: '1.5rem', left: '6%' }}>
          <Typography sx={{
            fontWeight: { xs: '400', sm: '600' },
            fontSize: "18px",
            lineHeight: "22px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            textAlign: "start",
            mb: '5px'
          }}>
            {props?.launchpad?.title}
          </Typography>
          <Box sx={{ display: 'flex', columnGap: 1, alignItems: 'center' }}>
            <Image src={props?.launchpad?.image} alt='StatsImg' sx={{ height: '16px' }} />
            <Typography sx={{
              fontWeight: { xs: '400', sm: '600' },
              fontSize: "28px",
              lineHeight: "34px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              textAlign: "start",
            }}>
              {props?.launchpad?.value}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
      <Graph bgColor={props} sx={{ position: 'relative' }} />
    </Box>
  );
};

export default LaunchPadStatisticsCard;
