import { Component } from "react";

class InputFile extends Component {
  render() {
    return (
      <div>
        <label for={this.props.name}>{this.props.label}</label>
        <input type="file" id={this.props.name} name={this.props.name} />
        <br />
        <br />
      </div>
    );
  }
}

export default InputFile;
