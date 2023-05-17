import React from 'react'
import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useCurrentUser, useLogout} from "../auth/useAuth";
import {Link} from "react-router-dom";

function AppHeader(): JSX.Element {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const user = useCurrentUser();
    const {logout} = useLogout();

    const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleLogout = (): void => {
        logout()
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <div/>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="start"
                            sx={{ml: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>{user?.email}</MenuItem>
                            {user !== null && <MenuItem onClick={handleLogout}>ログアウト</MenuItem>}
                            {user === null &&
                                <Link to="/login">
                                    <MenuItem>ログイン</MenuItem>
                                </Link>
                            }
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader