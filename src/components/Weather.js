import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city &&
          this.props.country && (
            <p className="weather__key">
              {" "}
              Location:
              <span className="weather__value">
                {" "}
                {this.props.city}, {this.props.country}
              </span>
            </p>
          )}

        {this.props.temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value">
              {" "}
              {Math.round((this.props.temperature * 9) / 5 - 459.67)}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather__key">
            Humidity:
            <span className="weather__value"> {this.props.humidity}</span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather__key">
            Conditions:
            <span className="weather__value"> {this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Weather;
