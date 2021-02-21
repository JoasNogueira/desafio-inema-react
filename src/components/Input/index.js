import { Component } from "react";
import "./styles.css";

class Input extends Component {
  render() {
    return (
      <div className="form-input">
        <label for={this.props.name}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default Input;
