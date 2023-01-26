import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import Filter from "./Filter";
import { ColorButton } from "../../../components/Button";
import QuickView from "./QuickView";
import AllPresale from "./AllPresale";
import MyContribution from "./MyContribution";
import MyFavourite from "./MyFavourite";
import MyCreatedPresales from "./MyCreatedPresales";
import Pagination from '@mui/material/Pagination';


const Content = () => {
  const [quickView, setQuickView] = useState(true);
  const [allPresale, setAllPresale] = useState(false);
  const [contribution, setContriibution] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [createdPresales, setCreatedPresales] = useState(false);

  const onClickQuickViewTab = () => {
    setQuickView(true);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickAllPresaleTab = () => {
    setQuickView(false);
    setAllPresale(true);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickContributionTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(true);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickFavouriteTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(true);
    setCreatedPresales(false);
  };

  const onClickCreatePresaleTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(true);
  };

  return (
    <Box>
      <Divider />
      <Box sx={{
        width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: '0.8rem', sm: '4%', md: '3%' },
        mt: { xs: '6%', sm: '2%', lg: '1%' }
      }}>
        <ColorButton onClick={onClickQuickViewTab} variant="contained" sx={{
          fontWeight: { xs: '100', sm: '300', md: '600', lg: '700' },
          fontSize: '14px',
          bgcolor: `${quickView === false ? 'transparent' : ''}`,
          boxShadow: `${quickView === false ? 'none' : ''}`,
        }}>
          Quick View
        </ColorButton>
        <ColorButton onClick={onClickAllPresaleTab} variant="contained" sx={{
          fontWeight: { xs: '100', sm: '300', md: '600', lg: '700' },
          fontSize: '14px',
          bgcolor: `${allPresale === false ? 'transparent' : ''}`,
          boxShadow: `${allPresale === false ? 'none' : ''}`,
        }}>
          AllPresale
        </ColorButton>
        <ColorButton onClick={onClickContributionTab} variant="contained" sx={{
          fontWeight: { xs: '100', sm: '300', md: '600', lg: '700' },
          fontSize: '14px',
          bgcolor: `${contribution === false ? 'transparent' : ''}`,
          boxShadow: `${contribution === false ? 'none' : ''}`,
        }}>
          My Contribution
        </ColorButton>
        <ColorButton onClick={onClickFavouriteTab} variant="contained" sx={{
          fontWeight: { xs: '100', sm: '300', md: '600', lg: '700' },
          fontSize: '14px',
          bgcolor: `${favourite === false ? 'transparent' : ''}`,
          boxShadow: `${favourite === false ? 'none' : ''}`,
        }}>
          My Favorites
        </ColorButton>
        <ColorButton onClick={onClickCreatePresaleTab} variant="contained" sx={{
          fontWeight: { xs: '100', sm: '300', md: '600', lg: '700' },
          fontSize: '14px',
          bgcolor: `${createdPresales === false ? 'transparent' : ''}`,
          boxShadow: `${createdPresales === false ? 'none' : ''}`,
        }}>
          My Created Presales
        </ColorButton>
      </Box>

      <Filter />

      <Box sx={{ mb: 10 }}>
        {quickView ? <QuickView /> : <></>}
        {allPresale ? <AllPresale /> : <></>}
        {contribution ? <MyContribution /> : <></>}
        {favourite ? <MyFavourite /> : <></>}
        {createdPresales ? <MyCreatedPresales /> : <></>}
        <Pagination count={50} sx={{ mt: 4,
          pl: { xs: '6%', sm: 0 }
        }} />
      </Box>

    </Box>
  );
};

export default Content;
