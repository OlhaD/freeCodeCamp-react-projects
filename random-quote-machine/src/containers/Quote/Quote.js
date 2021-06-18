import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faTumblrSquare } from "@fortawesome/free-brands-svg-icons"

import classes from './Quote.module.scss';

function Quote(props) {
    const quote = props.quote;

    return (
        <div className={classes.QuoteWrapper}>
            <div className={classes.Quote} style={{color: props.color}}>
                <div className={classes.Text}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <span className={classes.Text}>{quote.quote}</span>
                </div>
                <div className={classes.Author}>
                    - {quote.author}
                </div>
            </div>
            <div className={classes.Footer}>
                <div className={classes.Social}>
                    <div className={classes.TwitterBox}>
                        <a href="http://twitter.com/intent/tweet" target="_blank">
                            <FontAwesomeIcon icon={faTwitterSquare} style={{color: props.color}} />
                        </a>
                    </div>
                    <div className={classes.TumblrBox}>
                        <a href="http://tumblr.com/" target="_blank">
                            <FontAwesomeIcon icon={faTumblrSquare} style={{color: props.color}} />
                        </a>
                    </div>
                </div>
                <div className={classes.NewQuote}>
                    <button onClick={props.onNextQuote} style={{backgroundColor: props.color}}>New quote</button>
                </div>
            </div>
        </div>
    );
}

export default Quote;