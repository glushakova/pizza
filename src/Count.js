import React from 'react';
import './Count.css';

class Count extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.minus} className="button-count">
          -
        </button>
        <span>{this.props.value}</span>
        <button onClick={this.props.plus} className="button-count">
          +
        </button>
      </div>
    );
  }
}

export default Count;
