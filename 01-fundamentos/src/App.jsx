import { Carro } from "./components/Carro";
import { Header } from "./components/Header";

import './global.css';


export function App() {

  return (
    <div className="container">
      <Header/>
      <Carro marca="Cobalt" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cumque?"/>
      <Carro marca="Prisma" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cumque?"/>
      <Carro marca="Onix" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cumque?"/>
    </div>
  )
}
