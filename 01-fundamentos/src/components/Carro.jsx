import style from "./Carro.module.css"

export function Carro( props ){
    console.log(props)
    return(
        <div className={style.carro}>
            <h2>{props.marca}</h2>
            <p>{props.descricao}</p>
            <hr />
        </div>
    )
}