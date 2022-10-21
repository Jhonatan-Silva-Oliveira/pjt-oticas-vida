import React from 'react';

export default function SecaoContato() {
  return (
    <section>
      <div id="Contato">
        <h2>FALE CONOSCO</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre contato através de nossas redes sociais ou da central de atendimento.</p>
        <div>
          <div className="contatos">
            <h3>Contato</h3>
            <div>
              <img src="./assets/imagens/local.png"></img>
              <p>Nova Iguaçu, RJ</p>
            </div>
            <div>
              <img src="./assets/imagens/telefone.png"></img>
              <p>(21) 99999-9999</p>
            </div>
            <div>
              <img src="./assets/imagens/email.png"></img>
              <p>contato@oticavida.com</p>
            </div>
          </div>
          <div className="redes-sociais">
            <h3>Nossas Redes Sociais</h3>
            <div>
              <img src="./assets/imagens/fb.png"></img>
              <p>/OticaVida</p>
            </div>
            <div>
              <img src="./assets/imagens/ig.png"></img>
              <p>@oticavidarj</p>
            </div>
            <div>
              <img src="./assets/imagens/tt.png"></img>
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}