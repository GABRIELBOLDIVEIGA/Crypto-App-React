import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/estilosGlobais.scss";
import PaginaPrincipal from "pages/PaginaPrincipal";
import Carteira from "components/Carteira";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Mercado from "pages/Mercado";
import Crypto from "pages/Crypto";
import Portifolio from "pages/Portifolio";
import Descubra from "pages/Descubra/index";
import Enviar from "pages/Enviar/index";
import Receber from "pages/Receber";
import Swap from "pages/Swap/index";
import News from "pages/News";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}>
                    <Route path="/mercado" element={<Mercado />}></Route>

                    <Route path=":id" element={<Crypto />}></Route>
                    <Route path="/portifolio" element={<Portifolio />}></Route>
                    <Route path="/carteira" element={<Carteira />}></Route>
                    <Route path="/descubra" element={<Descubra />}></Route>
                    <Route path="/enviar" element={<Enviar />}></Route>
                    <Route path="/receber" element={<Receber />}></Route>
                    <Route path="/swap" element={<Swap />}></Route>
                    <Route path="/news" element={<News />}></Route>

                    <Route path="*" element={<PaginaNaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
