// import styles from "./NaoEncontrada.module.css";
// import erro404 from "assets/erro_404.png";
// import BotaoPrincipal from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate();

    return (
        <div>
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
