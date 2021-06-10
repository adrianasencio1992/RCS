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
      <NavBar />
    </SCDashboard>
  );
}

export default Dashboard;
