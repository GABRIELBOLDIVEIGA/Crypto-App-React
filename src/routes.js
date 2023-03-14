import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/estilosGlobais.scss";
import PaginaPrincipal from "pages/PaginaPrincipal";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Mercado from "pages/Mercado";
import DetalhesDaMoeda from "pages/DetalhesDaMoeda";
import Portifolio from "pages/Portifolio";
import Descubra from "pages/Descubra/index";
import Swap from "pages/Swap/index";
import News from "pages/News";
import Favoritos from "./pages/Favoritos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}>
                    
                        <Route path="/mercado" element={<Mercado />}></Route>
                        <Route path="/portifolio" element={<Portifolio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/mercado/:id" element={<DetalhesDaMoeda />}></Route>

                        <Route path="/descubra" element={<Descubra />}></Route>

                        <Route path="/swap" element={<Swap />}></Route>
                        <Route path="/news" element={<News />}></Route>

                        <Route path="*" element={<PaginaNaoEncontrada />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
