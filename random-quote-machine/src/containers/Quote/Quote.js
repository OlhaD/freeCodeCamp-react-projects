import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import classes from './Quote.module.scss';

function Quote(props) {
    const quote = props.quote;

    return (
        <div className={classes.QuoteWrapper}>
            <div className={classes.Quote} style={{color: props.color}}>
                <div className={classes.Text}>
                    <i className="fa fa-quote-left"></i>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span className={classes.Text}>{quote.quote}</span>
                </div>
                <div className={classes.Author}>
                    - {quote.author}
                </div>
            </div>
            <div className={classes.Footer}>
                <div className={classes.Social}>
                    Social
                </div>
                <div className={classes.NewQuote}>
                    Button
                </div>
            </div>
        </div>
    );
}

export default Quote;