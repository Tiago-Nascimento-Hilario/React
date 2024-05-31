import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function Section() {

  const nomebotao = "Versículo";
  const segundoTexto =
    "“Porque Deus amou o mundo de tal maneira, que deu o seu Filho Unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna” (João 3:16).";

  const [versiculo, setVersiculo] = useState('');
  
  
  function exibirVersiculo() {
    setVersiculo(segundoTexto);
  }
  setTimeout(setVersiculo, 8000)

  return (
    <div className="painel-container">
      <p className="paragrafo">{versiculo}</p>
      <button className="botao" onClick={exibirVersiculo}>
        {nomebotao}
      </button>
    </div>
  );
}
