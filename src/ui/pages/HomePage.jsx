// src/ui/pages/HomePage.jsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from "@mui/material";
import { Link } from 'react-router';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import "./HomePage.css";

const HomePage = () => {
    return (
        <Box className="home-box">
            <Box className="hero-section">
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to the Library Management System
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Manage your books, authors, and countries with ease
                </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <LibraryBooksIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                            </Box>
                            <Typography variant="h5" component="div" gutterBottom>
                                Books
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Browse, add, edit, and delete books in your library collection.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/books"
                                size="large"
                                fullWidth
                            >
                                View Books
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <PeopleIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                            </Box>
                            <Typography variant="h5" component="div" gutterBottom>
                                Authors
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Manage authors and see their books and countries of origin.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/authors"
                                size="large"
                                fullWidth
                            >
                                View Authors
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <PublicIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                            </Box>
                            <Typography variant="h5" component="div" gutterBottom>
                                Countries
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Explore countries and see authors from each location.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/countries"
                                size="large"
                                fullWidth
                            >
                                View Countries
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;