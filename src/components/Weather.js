import React from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          Location: <span className="weather__value"> {props.city},{props.country}</span>
        </p>
      )}
      {props.temp && (
        <p className="weather__key">
          Tempature: <span className="weather__value"> {props.temp - 273.15}</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value"> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Description: <span className="weather__value"> {props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
