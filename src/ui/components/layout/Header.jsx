// ui/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const pages = [
    {"path": "/", "name": "Home"},
    {"path": "/books", "name": "Books"},
    {"path": "/authors", "name": "Authors"},
    {"path": "/countries", "name": "Countries"},
];

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <LibraryBooksIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        LIBRARY
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Link
                                key={page.name}
                                to={page.path}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;