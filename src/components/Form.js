import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input typpe="text" name="city" placeholder="City" />
        <input typpe="text" name="country" placeholder="Country" />
        <button>Get Weather</button>
    </form>
)

export default Form;