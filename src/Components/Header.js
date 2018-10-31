import React, { Component } from 'react';
import RandomQuote from './RandomQuote';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="animation">
                    <iframe width="50" height="50" src="https://lottiefiles.com/iframe/1798-check-animation" frameborder="0" allowfullscreen></iframe>                </div>
                <h3>
                    <p>Organize Everything</p>
                </h3>

                < RandomQuote
                    onClick={this.quote} />
            </div>
        );
    }

}



export default Header;