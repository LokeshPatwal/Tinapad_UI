import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from "../../components/Image";
import { useWeb3React } from "@web3-react/core";
// import { connectors } from "./connectors";
import { Button, Stack } from "@mui/material";
import Paragraph from "../../components/Paragraph";
import metamask from "../../assets/metaMask.jpg";
import walletconnect from "../../assets/walletConnect.jpg";
import coinbasewallet from "../../assets/coinbaseWallet.jpg";
import Divider from '@mui/material/Divider';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ColorButton } from '../Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'fit-content',
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

export default function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const connectMetamaskWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* Metamask is installed */
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" })
        setWalletAddress(accounts[0]);
      } catch (err: any) {
        console.error(err.message);
      }
    }
    else {
      /* Metamask is installed */
      console.log("Please install MetaMask");
    }
  }

  return (
    <div>
      <ColorButton
        onClick={handleOpen}
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
        Connect Wallet
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack>
            <Button fullWidth
              onClick={() => {
                // activate(connectors.coinbaseWallet);
                handleClose();
              }}>
              <Stack justifyContent="center" rowGap={1}>
                <Image
                  src={coinbasewallet}
                  alt="Coinbase Wallet Logo"
                  borderRadius="3px"
                  sx={{ width: '3rem', mx: 'auto' }}
                />
                <Paragraph sx={{ color: 'white', fontWeight: '800', fontSize: '1.2rem', textTransform: 'none' }}>Coinbase Wallet</Paragraph>
                <Paragraph sx={{ textTransform: 'none' }}>Scan with Coinbase Wallet to connect</Paragraph>
              </Stack>
            </Button>
            <Divider sx={{ my: '1rem' }} />
            <Button fullWidth
              onClick={() => {
                // activate(connectors.walletConnect);
                handleClose();
              }}>
              <Stack justifyContent="center" rowGap={1}>
                <Image
                  src={walletconnect}
                  alt="Wallet Connect Logo"
                  borderRadius="3px"
                  sx={{ width: '3rem', mx: 'auto' }}
                />
                <Paragraph sx={{ color: 'white', fontWeight: '800', fontSize: '1.2rem', textTransform: 'none' }}>Wallet Connect</Paragraph>
                <Paragraph sx={{ textTransform: 'none' }}>Scan with WalletConnect to connect</Paragraph>
              </Stack>
            </Button>
            <Divider sx={{ my: '1rem' }} />
            <Button fullWidth
              onClick={() => {
                // activate(connectors.injected);
                handleClose();
              }}>
              <Stack justifyContent="center" rowGap={1} onClick={connectMetamaskWallet}>
                <Image
                  src={metamask}
                  alt="Metamask Logo"
                  borderRadius="3px"
                  sx={{ width: '3rem', mx: 'auto' }}
                />
                <Paragraph sx={{ color: 'white', fontWeight: '800', fontSize: '1.2rem', textTransform: 'none' }}>Metamask</Paragraph>
                <Paragraph sx={{ textTransform: 'none' }}>Connect to your MetaMask Wallet</Paragraph>
              </Stack>
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}