import { useNavigate } from "react-router-dom";
import styles from "./PaginaNaoEncontrada.module.css";

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate();

    return (
        <div className={styles.page}>
            <span>404</span>
            <h1> Ops! Página não encontrada.</h1>
            <p>Tem certeza de que era isso que você estava procurando?</p>
            <p>Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.</p>
            <div onClick={() => navegar(-1)}>
                <button>Voltar</button>
            </div>
        </div>
    );
}
