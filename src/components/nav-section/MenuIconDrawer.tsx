import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import HamburgerMenu from '../../assets/Hamburger.png';
import Image from '../Image';
import { IconButton, Toolbar } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuIconDrawer = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event && event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <List>
            {appRoutes.map((route, index) =>
                route.sidebarProps ? (
                    route.child ?
                        (<SidebarItemCollapse item={route} key={index} />)
                        :
                        (<SidebarItem item={route} key={index} />)
                ) : null
            )}
        </List>
    );
    return (
        <div >
            {
                (['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Toolbar>
                            <IconButton onClick={toggleDrawer(anchor, true)}>
                                <Image
                                    visibleByDefault
                                    alt="Hamburger menu"
                                    src={HamburgerMenu}
                                />
                            </IconButton>
                        </Toolbar>
                        <SwipeableDrawer anchor={anchor} open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default MenuIconDrawer;