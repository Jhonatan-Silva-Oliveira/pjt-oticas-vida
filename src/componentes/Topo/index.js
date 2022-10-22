import React from 'react';
import "./style.css"

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao secao-topo">
        <img src="./assets/imagens/logo.png"></img>
        <nav>
          <a href="#Produtos">PRODUTOS</a>
          <a href="#Sobre">SOBRE</a>
          <a href="#Contato">CONTATO</a>
        </nav>
      </div>
    </header>
  )
}