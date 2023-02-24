import livros from "componentes/Livros/livros.json";
// import styles from "./Livros.module.scss";

export default function Livros() {
    return (
        <div>
            <h1>livros: </h1>
            {livros.map((element) => {
                return (
                    <article>
                        <h3>{element.titulo}</h3>
                        <a href={element.link_pdf} target="_blank" rel="noreferrer">{element.titulo}</a>
                        <img src={element.capa} alt=""/>
                    </article>
                );
            })}
        </div>
    );
}
