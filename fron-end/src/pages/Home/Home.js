import React from "react";
import { Link } from "react-router-dom";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCHome from "./Home.styled";
import Text from "./Home.styled";
function Home() {
  return (
    <SCHome>
      <div className="div-ubicacion-principal">
        <div className="div-ubicacion">
          <img className="ubicacion" src="/ubicacion2.png"></img>
          <img className="ubicacion2" src="/ubicacion.png"></img>
        </div>
        <div className="div-informacion">
          <h2 className="h2-ubicacion">RUBÍ</h2>
          <h3 className="h3-ubicacion">C/ Lope de Vega, 22 LOCAL</h3>
          <h3 className="h3-ubicacion">✆ 674686045 - 635126596</h3>
          <h3 className="h3-ubicacion">✉ rcs.reformas@hotmail.com</h3>
        </div>
      </div>
      <div className="div-h1">
        <ul class="slideshow">
          <li>
            <span></span>
          </li>
          <li>
            <span>2</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="div-precio">
        <h3 className="div-h3-precio">CALCULA TU PRESUPUESTO</h3>
      </div>
    </SCHome>
  );
}

export default Home;
