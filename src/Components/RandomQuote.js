import React, { Component } from 'react';

const quotes = [
    "For every minute spent organizing, an hour is earned. ~ Benjamin Franklin",
    "Good order is the foundation of all things. – Edmund Burke",
    "Eliminate physical clutter. More importantly, eliminate spiritual clutter. ~ D.H. Mondfleur",
    "Less is more. ~ Mies Van Der Rohe",
    "It takes as much energy to wish as it does to plan. ~ Eleanor Roosevelt",
    "Start where you are. Use what you have. Do what you can. ~ Arthur Ashe",
    "Organize, don't agonize. ~ Nancy Pelosi",
    "By failing to prepare, you are preparing to fail. ~ Benjamin Franklin"
]


class RandomQuote extends Component {

    state = {
        quote: ''
    }

    getRandomQuote = () => {
        let randomNum = (Math.floor(Math.random() * quotes.length));
        let randomQuote = quotes[randomNum];
        this.setState({ quote: randomQuote })
    }

    render() {
        return (
            <div className="quote">
                <p class="quote-text"> {this.state.quote}
                </p>
                <button button className="pull-right btn btn-default" type="button" onClick={this.getRandomQuote}>
                    Inspire me
                </button>

                <div className="showQuote">

                </div>
                <br />
            </div>
        );
    }
}

export default RandomQuote;