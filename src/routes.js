import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/estilosGlobais.scss";
import PaginaPrincipal from "paginas/PaginaPrincipal";
import Carteira from "componentes/Carteira";
// import ScrollToTop from "componentes/ScrollToTop";
import PaginaNaoEncontrada from "./paginas/PaginaNaoEncontrada/index";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}>
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="*" element={<PaginaNaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
