import React, { Component } from 'react';
import Quote from '../Quote/Quote';
import classes from './QuoteList.module.scss';
import randomColor from "randomcolor";

class QuoteList extends Component {
    // TODO: get quotes: https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
    state = {
        quotes: [
            {
                quote: "Winning isn’t everything, but wanting to win is.",
                author: "Vince Lombardi"
            }
        ]
    }

    render() {
        const color = randomColor();
        const quote = this.state.quotes[0];

        return (
            <div className={classes.QuoteList} style={{backgroundColor: color}}>
                <Quote quote={quote} color={color} />
            </div>
        );
    }
}

export default QuoteList;