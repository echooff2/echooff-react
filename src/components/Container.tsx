import React from 'react';

import Header from './Header';
import MainContent from './MainContent';

class Container extends React.Component {
    render() {
        return (
            <div id="container">
                <Header />
                <MainContent />
            </div>
        );
    }
}

export default Container;