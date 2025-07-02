// ui/components/layout/Layout.jsx
import React from 'react';
import { Box, Container } from "@mui/material";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";
import "./Layout.css";


const Layout = () => {
    return (
        <Box className="layout-box">
            <Header />
            <Container className="outlet-container" sx={{ my: 2, minHeight: 'calc(100vh - 64px - 212px)' }} maxWidth="xl">
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;