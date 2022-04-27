import React from 'react';
import {Routes, Route, HashRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Page from './components/Page';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';
import ScrollToTop from './ScrollToTop';

class App extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop />
                <Header />
                    <Routes>
                        <Route exact path="/" element={<FrontPage />} />
                        <Route exact path="/dancer" element={<Page category='dancer' />} />
                        <Route exact path="/choreo" element={<Page category='choreo' />} />
                        <Route exact path="/actress" element={<Page category='actress' />} />
                        <Route exact path="/model" element={<Page category='model' />} />
                    </Routes>
                <Footer />
                <Sidenav />
            </Router>
        );
    }
}

export default App;