import { Component } from "react";
import "./styles.css";

class Checkbox extends Component {
  render() {
    return (
      <div className="c-termos">
        <input type="checkbox" id={this.props.name} name={this.props.name} />
        <label for={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
