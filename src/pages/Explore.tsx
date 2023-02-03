import { Box } from "@mui/material";
import Header from "../layouts/common/Header";
import LaunchPadRecord from "../layouts/common/LaunchPadRecord";
import Content from "../layouts/presales/explore/Content";
import HotProject from "../layouts/presales/explore/HotProject";

const Explore = () => {
  return (
    <>
      <Box sx={{ px: { xs: 1, sm: 2 } }}>
        <Header />
        <LaunchPadRecord />
        <HotProject />
        <Content />
      </Box>
    </>
  );
};

export default Explore;
