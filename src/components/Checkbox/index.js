import { Component } from "react";
import "./styles.css";

class Checkbox extends Component {
  render() {
    return (
      <div className="check">
        <input type="checkbox" id={this.props.name} name={this.props.name} checked={this.props.checked} onChange={this.props.onChange}/>
        <label for={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
