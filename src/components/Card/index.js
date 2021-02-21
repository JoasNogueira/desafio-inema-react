import { Component } from 'react';
import "./styles.css";

class Card extends Component {

    render() {
        return (
            <div>
                <div className="data-inscricao">
                    <h2>EXPOSIÇÃO DE FOTOS</h2>
                    <p>20 á 24/03/2017 na divisórias da Ouvidoria
                                        (em frente ao elevador)</p>
                    <h2>APRESENTAÇÃO</h2>
                    <p>20/03/2017 das 16:30h ás 17:30h.</p>
                </div>
                <div className="botao-incricao">
                    <button style={{ cursor: "pointer" }} onClick={this.props.openModal}>FAÇA SUA INSCRIÇÃO</button>
                </div>
            </div>
        );
    }
}


export default Card;