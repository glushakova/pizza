import React from 'react';
import './App.css';

class Clear extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className="heigth">
          Clear
        </button>
      </div>
    );
  }
}

export default Clear;
