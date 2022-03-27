import React from 'react';
import PropTypes from 'prop-types';

const Greeting = props => {
    const {name, age} = props;
    return (
        <div>
            Greetings, {name}! You are {age} year(s) old.
        </div>
    )
}


export default Greeting
