import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { ColorButton } from '../Button';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from 'react-router-dom';
import BinanceSC from '../../assets/BinanceSC.png';
import Ethereum from '../../assets/Ethereum.png';
import Image from '../Image';

export default function NetChainButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="">
          <ColorButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            startIcon={<AddCircleIcon />}
            sx={{
              height: "fit-content",
              borderRadius: "20px",
              bgcolor: "rgba(242, 12, 236, 0.15)",
            }}
          >
            {/* {chain} &nbsp;Chain */}
            Network Chain
          </ColorButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },

          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose} >
            <Image src={BinanceSC} sx={{ width: '25px', mr: '0.5rem' }} />
            Binance Smart Chain
          </MenuItem>
        </Link>
        <Divider />
        <Link to="" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose} >
            <Image src={Ethereum} sx={{ width: '25px', mr: '0.5rem' }} />
            Ethereum
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}