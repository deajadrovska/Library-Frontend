// ui/components/layout/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LibraryBooksIcon sx={{ mr: 1 }} />
                            <Typography variant="h6">
                                LIBRARY
                            </Typography>
                        </Box>
                        <Typography variant="body2">
                            Your knowledge hub for books, authors, and literary destinations.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Navigation
                        </Typography>
                        <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Home
                        </Link>
                        <Link href="/books" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Books
                        </Link>
                        <Link href="/authors" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Authors
                        </Link>
                        <Link href="/countries" color="inherit" sx={{ display: 'block' }}>
                            Countries
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Email: library@example.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: +1 234 567 890
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 2, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Library Management System. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;