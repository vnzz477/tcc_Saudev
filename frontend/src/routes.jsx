import {BrowserRouter, Route, Routes} from "react-router";
import Inicio from "./pages/inicio/inicio";
import Cadastro from "./pages/cadastro/Index";
import Login from "./pages/login/login";
import Agenda from "./pages/agenda/agenda";
import Sobre from "./pages/sobre/sobre";
import Consulta from "./pages/verificarConsultas/consulta";
import Blogs from "./pages/blogs/blog";
import Desenvolvedores from "./pages/desenvolvedores";
import Atendimento from "./pages/atendimento/atendimento"


export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                 <Route path="/agenda" element={<Agenda/>}/>
                 <Route path="/sobre" element={<Sobre/>}/>
                 <Route path="/consulta" element={<Consulta/>}/>
                 <Route path="/blogs" element={<Blogs/>}/>
                 <Route path="/dev" element={<Desenvolvedores/> }/>
                 <Route path="/atendimento" element={<Atendimento/> } />
            </Routes>
        </BrowserRouter>
    )
}