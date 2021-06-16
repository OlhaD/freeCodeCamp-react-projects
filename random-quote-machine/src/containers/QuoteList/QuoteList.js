import React, { Component } from 'react';
import randomColor from "randomcolor";
import Alert from '@material-ui/lab/Alert';

import Quote from '../Quote/Quote';
import classes from './QuoteList.module.scss';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import axios from '../../hoc/Auxillary/axios/axios';

class QuoteList extends Component {
    errorMessages = {
        dataLoadError: "An error occured during data loading. Please, try again later."
    }    

    state = {
        errorMessage: "",
        quotes: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/quotes.json');

            this.setState({
                quotes: response.data.quotes
            })
        } catch (e) {
            this.setState({
                errorMessage: this.errorMessages.dataLoadError
            });
        }
    }

    getQuote = () => {
        if(!this.state.quotes.length){
            return [];
        }
        
        const index = Auxillary.getRandomInt(this.state.quotes.length);
        return this.state.quotes[index];
    }

    onNextQuoteHandler = () => {
        this.forceUpdate();
    }

    render() {
        const color = randomColor();
        const quote = this.getQuote();
        
        return (
            <div className={classes.QuoteList} style={{backgroundColor: color}}>
                {
                    this.state.errorMessage 
                        ? <Alert severity="error">{this.state.errorMessage}</Alert>
                        : <Quote quote={quote} color={color} onNextQuote={() => this.onNextQuoteHandler()} />
                }
            </div>
        );
    }
}

export default QuoteList;