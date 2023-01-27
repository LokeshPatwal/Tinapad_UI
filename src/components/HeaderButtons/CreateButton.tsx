import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ColorButton } from '../Button';
import { Link } from 'react-router-dom';


export default function CreateButton() {
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
            Create
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
        <Link to="/launchpad/create-presale" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose}>
            Create Normal Presale
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/launchpad/create-fairlaunch" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose}>
            Create Fair Launch
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/utility/create-token" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose}>
            Create Token
          </MenuItem>
        </Link>
        <Divider />
        <Link to="" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem onClick={handleClose} sx={{ color: "#F20CEC" }}>
            Apply For Alpha Incubation
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}