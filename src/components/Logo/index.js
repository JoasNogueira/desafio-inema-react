import { Component } from 'react';
import "./styles.css";
import LogoImg from "../../assets/img/logo.png"

class Logo extends Component {

    render() {
        return (
            <div>
                <div className="background">
                </div>
                <div className="logo">
                    <img src={LogoImg} />
                </div>
            </div>
        );
    }
}

export default Logo;