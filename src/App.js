import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Page from './components/Page';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/dance" element={<Page />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
                <Sidenav />
            </div>
        );
    }
}

export default App;