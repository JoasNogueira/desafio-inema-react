import { Component } from 'react';
import "./styles.css";

class NavMenu extends Component{

    render() {
        return(
            <header class="menu-principal">
                <div class="menu-espaco">
                    <div class="header-1">
                        <ul>
                            <li><a href="index.html">Início</a></li>
                            <li><a href="#concurso">O Concurso</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#regras">Regras</a></li>
                            <li><a id="myBtn">Inscrição</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}


export default NavMenu;