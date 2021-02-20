import { Component } from 'react';
import "./styles.css";

class Topico extends Component {

    render() {
        return (
            <div id={this.props.id} className="topico">
                <h2>{this.props.titulo}</h2>
                {this.props.children}
            </div>
        );
    }
}


export default Topico;