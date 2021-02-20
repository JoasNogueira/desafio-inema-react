import { Component } from 'react';
import "./styles.css";
import LogoInema from "../../assets/img/marca_inema_sem_fundo.png"

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <img src={LogoInema} />
            </div>
        );
    }
}


export default Footer;