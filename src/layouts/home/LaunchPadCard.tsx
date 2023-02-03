import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "../../components/Image";

const LaunchPadCard = (props: any) => {
  return (
    <Box sx={{
      // backgroundColor: 'green',
      // backgroundImage: `url(${props?.launchpad?.image})`,
      // backgroundRepeat: "no-repeat",
      // background: 'linear-gradient(268.6deg, rgba(38, 42, 51, 1) 0.73%, rgba(27,30,37,0.5) 98.81%)',
      // background: 'radial-gradient(circle at bottom right, rgba(242, 12, 236, 0.4) ,rgba(38, 42, 51, 1), rgba(27,30,37,0.5))',
      background: `${props?.launchpad?.background}`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'end',
      borderRadius: '25px',
      height: '177px',
      width: { xs: '100%', sm: '270px' },
      mx: 'auto',
      my: '5px',
      padding: '1.2rem',
      position: 'relative',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <Box>
          <Typography sx={{
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "22px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            textAlign: "start",
            opacity: '1',
          }}
          >
            {props?.launchpad?.title}
          </Typography>
          <Typography variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.5,
              mt: 0.5,
            }}
          >
            {props?.launchpad?.subtitle}
          </Typography>
        </Box>
        <Box>
          <Box sx={{
            display: "flex",
            cursor: "pointer",
            color: `${props?.launchpad?.typographyColor}`,
          }}>
            <Typography sx={{
              color: `${props?.launchpad?.typographyColor}`,
              textAlign: "start",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
            }}
            >
              {props?.launchpad?.link1}
            </Typography>
            <ChevronRightIcon />
          </Box>
          {props?.launchpad?.link2 ? (
            <>
              <Box sx={{
                display: "flex",
                cursor: "pointer",
                color: `${props?.launchpad?.typographyColor}`,
              }}
              >
                <Typography sx={{
                  color: `${props?.launchpad?.typographyColor}`,
                  textAlign: "start",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
                >
                  {props?.launchpad?.link2}
                </Typography>
                <ChevronRightIcon />
              </Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box sx={{ height: 'fit-content', position: 'absolute', right: -5, bottom: 0 }}>
        <Image src={props?.launchpad?.image} alt='Image' sx={{ width: '5rem', opacity: '0.1' }} />
      </Box>
    </Box >
  );
};

export default LaunchPadCard;
