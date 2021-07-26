import React from 'react';
import './App.css';

import Container from './components/Container';
import Footer from './components/Footer';

class App extends React.Component {
    render()  {
        return (
            <div className="app">
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;
