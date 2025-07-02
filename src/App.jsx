import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './ui/components/layout/Layout.jsx';
import HomePage from './ui/pages/HomePage.jsx';
import BooksPage from './ui/pages/BooksPage.jsx';
import AuthorsPage from './ui/pages/AuthorsPage.jsx';
import CountriesPage from './ui/pages/CountriesPage.jsx';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="/countries" element={<CountriesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};


export default App;