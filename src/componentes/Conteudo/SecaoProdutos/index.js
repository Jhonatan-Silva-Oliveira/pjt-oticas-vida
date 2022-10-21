import React from 'react';

export default function SecaoProdutos() {
  return (
    <section>
      <div id="Produtos">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Tralhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, femininos e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        
        <div className="secao-cards">
          <div className="card">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos01.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos02.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h3>Óculos de grau</h3>
            <img src="../assets/imagens/oculos03.png"></img>
            <p>R$ 500,00</p>
          </div>
          <div className="card">
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