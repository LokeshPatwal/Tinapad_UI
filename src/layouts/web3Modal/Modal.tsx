import Image from "../../components/Image";
import { useWeb3React } from "@web3-react/core";
// import { connectors } from "./connectors";
import { Button, Stack } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Paragraph from "../../components/Paragraph";


export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { activate } = useWeb3React();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <Stack>
                <Button fullWidth
                    onClick={() => {
                        // activate(connectors.coinbaseWallet);
                        handleClose();
                    }}
                >
                    <Stack width="100%" justifyContent="center">
                        <Image
                            src="/cbw.png"
                            alt="Coinbase Wallet Logo"
                            width={25}
                            height={25}
                            borderRadius="3px"
                        />
                        <Paragraph>Coinbase Wallet</Paragraph>
                    </Stack>
                </Button>
                <Button fullWidth
                    onClick={() => {
                        // activate(connectors.walletConnect);
                        handleClose();
                    }}
                >
                    <Stack width="100%" justifyContent="center">
                        <Image
                            src="/wc.png"
                            alt="Wallet Connect Logo"
                            width={26}
                            height={26}
                            borderRadius="3px"
                        />
                        <Paragraph>Wallet Connect</Paragraph>
                    </Stack>
                </Button>
                <Button fullWidth
                    onClick={() => {
                        // activate(connectors.injected);
                        handleClose();
                    }}
                >
                    <Stack width="100%" justifyContent="center">
                        <Image
                            src="/mm.png"
                            alt="Metamask Logo"
                            width={25}
                            height={25}
                            borderRadius="3px"
                        />
                        <Paragraph>Metamask</Paragraph>
                    </Stack>
                </Button>
            </Stack>
        </Dialog>
    );
}