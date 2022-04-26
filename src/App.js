import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
                    <Routes>
                        <Route exact path="/" element={<FrontPage />} />
                        <Route exact path="/dancer" element={<Page category='dancer' />} />
                        <Route exact path="/choreo" element={<Page category='choreo' />} />
                        <Route exact path="/actress" element={<Page category='actress' />} />
                        <Route exact path="/model" element={<Page category='model' />} />
                    </Routes>
                <Footer />
                <Sidenav />
            </div>
        );
    }
}

export default App;