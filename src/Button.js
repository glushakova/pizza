import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="compotent">
        <button
          className="button"
          onClick={this.props.onClick}
          disabled={
            this.props.item >= 5 && this.props.choice === false ? true : false
          }
        >
          {this.props.choice ? "✔" : "✖"}
        </button>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

export default Button;
