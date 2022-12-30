"use strict";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const profileMenuID = "account-menu";

    const renderProfileMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            id={profileMenuID}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
        </Menu>
    )

    return (
        <div>
            <AppBar position="relative">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography 
                            align="left"
                            variant="h5"
                            sx={{
                                flexGrow: 1
                            }}
                        >
                            Sample Forum Website
                        </Typography>
                        <IconButton size="medium">
                            <Badge badgeContent={0} color="error">
                                <NotificationsIcon fontSize="large" style={{color: "white"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton 
                            size="medium"
                            onClick={handleProfileMenuOpen}
                        >
                            <Avatar alt="test"></Avatar>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderProfileMenu}
        </div>
    )
}