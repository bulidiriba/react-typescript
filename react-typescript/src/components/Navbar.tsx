import React, { FC, ReactElement } from "react";
import { 
    Box, Link, Container, IconButton, Menu, MenuItem, Toolbar, Typography
} from "@mui/material";
import  MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

export const Navbar: FC = (): ReactElement => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <Box sx={{ width: "100%", backgroundColor: "secondary.main" }}>
            <Container >
                <Toolbar>
                <Box sx={{ mr:2, display: { xs:"flex", md:"none"},}}>
                    <Box sx={{ flexGrow:1 }}>
                        <IconButton 
                            size="large" 
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" 
                            anchorEl={anchorElNav} 
                            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                            keepMounted
                            transformOrigin={{vertical: "top", horizontal: "left"}}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}>
                                {routes.map((page) => (
                                    <Link
                                        key={page.key}
                                        component={NavLink}
                                        to={page.path}
                                        color="black"
                                        underline="none"
                                        variant="button"
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                    </Box>
                    <Typography variant="h6" noWrap component="div" >
                        React Starter App
                    </Typography>                
                </Box> 
                <Box sx={{flexGrow: 1, display: { xs: "none", md: "flex" }}}>
                    <Typography variant="h6" noWrap>
                        Starter App
                    </Typography>
                    <Box sx={{ justifyContent: "flex-start", alignItems: "center", marginLeft: "1rem"}}>
                        {routes.map((page) => (
                            <Link
                                key={page.key}
                                component={NavLink}
                                to={page.path}
                                color="black"
                                underline="none"
                                variant="button"
                                sx={{ fontSize: "large", marginLeft: "2rem" }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>
                </Box>
                </Toolbar>
            </Container>
        </Box>
    )

}
