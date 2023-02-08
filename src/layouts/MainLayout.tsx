import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import sizeConfigs from "../configs/sizeConfigs";
import Sidebar from "../components/nav-section/Sidebar";
import { useState, useEffect } from "react";

const MainLayout = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 900) {
        setMobileView(true);
      }
    };
    setResponsiveness();

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <>
      <Box component="nav" sx={{ flexShrink: 0 }}>
        {
          mobileView ? null : <Sidebar />
        }
      </Box>
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto", width: 'fix-layout' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  )
}

export default MainLayout