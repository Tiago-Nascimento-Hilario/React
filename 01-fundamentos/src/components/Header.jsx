import style from "./Header.module.css";

console.log(style)

export function Header(){
    return(
        <header className={style.header}>
            <strong>Lista de carros</strong>
        </header>
    )
}