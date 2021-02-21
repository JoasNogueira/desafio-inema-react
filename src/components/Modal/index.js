import { Component } from 'react';
import "./styles.css";


class Modal extends Component {

    render() {
        return (
            <div id="myModal" className={"modal " + (this.props.open ? "show-modal" : "")} onClick={this.props.onClose} >
                <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{this.props.titulo}</h2>
                        <span className="close" onClick={this.props.onClose}>&times;</span>
                    </div>

                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    
                    <div className="modal-footer">
                        <button onClick={this.props.onSubmit}>Enviar</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Modal;