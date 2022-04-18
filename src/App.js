import React from 'react';
import Header from './components/Header';
import FrontImage from './components/FrontImage';
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FrontImage />
                <About />
                <Categories />
                <Footer />
                <Sidenav />
            </div>
        );
    }
}

export default App;