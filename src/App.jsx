import { useState } from "react";
import "./App.css";
{/* import Administrador from './components/ADMINISTRADOR/Administrador' */}
{/* import Cuentadante from './components/CUENTADANTE/Cuentadante' */}
import Facilitador from "./components/FACILITADOR/Facilitador";
import Gestion from "./components/FACILITADOR/Gestion";

function App() {
  const [pantalla, setPantalla] = useState("facilitador");

  return (
    <>
      {/* <Administrador /> */}
      {/* <Cuentadante /> */}
      {pantalla === "facilitador" && (
        <Facilitador onIrGestion={() => setPantalla("gestion")} />
      )}
      {pantalla === "gestion" && (
        <Gestion onIrFacilitador={() => setPantalla("facilitador")} />
      )}
    </>
  );
}

export default App;