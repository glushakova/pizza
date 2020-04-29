import React from 'react';
import './Button.css';
import Count from './Count';

class Button extends React.Component {
  render() {
    return (
      <div className="compotent">
        {this.props.choice && this.props.choice > 0 ? (
          <Count
            minus={this.props.minus}
            plus={this.props.plus}
            value={this.props.choice}
          />
        ) : (
          <button
            className="button"
            onClick={this.props.onClick}
            disabled={this.props.disabled && !this.props.choice}
          >
            {'✖'}
          </button>
        )}
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

export default Button;
