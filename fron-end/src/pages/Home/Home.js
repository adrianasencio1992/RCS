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
      <div className="div-slideshow">
        <ul class="slideshow">
          <li>
            <span></span>
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
          <li>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="div-precio">
        <h3 className="div-h3-precio">CALCULA TU PRESUPUESTO</h3>
      </div>
      <div>
        <form className="formulario-presupuesto">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
      <h2>HOLA</h2>
    </SCHome>
  );
}

export default Home;
