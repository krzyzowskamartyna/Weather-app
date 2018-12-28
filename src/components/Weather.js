import React from 'react';

const Weather = props => (
    <div className="weather__info">
        {props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value">  {props.city}, {props.country}</span></p>}
        {props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value">  {props.temperature}</span>&#8451; </p>}
        {props.pressure && <p className="weather__key">Pressure:
        <span className="weather__value">  {props.pressure} </span> hPa</p>}
        {props.description && <p className="weather__key">Description:
        <span className="weather__value">  {props.description} </span></p>}
        {props.error && <p className="weather__error">{props.error}</p>}
    </div>
);

export default Weather;