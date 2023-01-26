import { Container, Box } from "@mui/system";
import React from "react";
import Header from "../layouts/common/Header";
import LaunchPadRecord from "../layouts/common/LaunchPadRecord";
import LaunchPad from "../layouts/home/LaunchPad";
import Footer from "../layouts/home/Footer";
const Home = () => {
  return (
    <>
      <Box sx={{ p: { xs: 1, sm: 2 } }} >
        <Header />
        <LaunchPadRecord />
        <LaunchPad />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
