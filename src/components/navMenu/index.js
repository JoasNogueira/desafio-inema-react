import React, { Component } from 'react';

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
                            <li><a id="myBtn" style="cursor: pointer;">Inscrição</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}