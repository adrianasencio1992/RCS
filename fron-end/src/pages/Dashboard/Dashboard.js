import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SCDashboard from "./Dashboard.styled";
import { withAuth } from "../../context/auth.context";

function Dashboard(props) {
  return (
    <SCDashboard>
      <div className="contendor-dashboard">
        <img
          className="logo-navbar"
          src="../../../logo-imagenes.png"
          alt="lapiz"
        />
        <div className="contendor-nombre-y-eslogan">
          <div className="nombre-empresa">
            <h1 className="h1-navbar">
              RCS | Reformas, Construcciones y Servicios
            </h1>
          </div>
          <div className="div-eslogan">
            <div className="eslogan">Tu lo imaginas</div>
            <div className="eslogan">
              <span>, nosotros lo creamos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navegador">
        <ul class="nav nav-pills">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              REFORMAS
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE CASAS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE PISOS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE COCINAS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE BAÑOS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE PARQUET Y PUERTAS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  REFORMAS DE VENTANAS DE ALUMINIO
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PINTURA
                </a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  HAZ TU PROPIO PRESUPUESTO
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              PRESUPUESTOS
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  DISEÑA TU PROPIO PRESUPUESTO
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PRESUPUESTO ONLINE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  FINANCIACIÓN
                </a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  CONTACTANOS
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              PRECIOS
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  PRECIOS ORIENTATIVOS REFORMA
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PRECIO MATERIALES
                </a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  FINANCIACIÓN
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              DISEÑA TU REFORMA
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  DISEÑA TU PROPIA COCINA
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  DISEÑA TU PROPIO BAÑO
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  TE DISEÑAMOS NOSOTROS
                </a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  CONTACTANOS
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              SOBRE NOSOTROS
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  VENTAJAS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NUESTROS FABRICANTES
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PREGUNTAS FRECUENTES
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ¿QUIERES TRABAJAR CON NOSOTROS?
                </a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  FILOSOFÍA DE LA EMPRESA
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
      <NavBar />
    </SCDashboard>
  );
}

export default Dashboard;
