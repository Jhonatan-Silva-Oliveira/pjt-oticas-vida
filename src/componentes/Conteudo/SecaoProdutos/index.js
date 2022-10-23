import React from 'react';
import './style.css'

export default function SecaoProdutos() {
  return (
    <section className="secao-produtos">
      <div className="limitar-secao" id="Produtos">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Tralhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, femininos e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        
        <div className="cards-container-produtos">
          <div className="card-produtos">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos01.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos02.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos03.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos04.png"></img>
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}