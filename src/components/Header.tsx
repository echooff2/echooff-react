import React from 'react';
import baner from '../img/baner.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={baner} id="baner" alt="baner" />
            </header>
        );
    }
}

export default Header;