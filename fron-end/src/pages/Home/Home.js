import React from "react";
import { Link } from "react-router-dom";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCHome from "./Home.styled";
import Text from "./Home.styled";
function Home() {
  return (
    <div>
      <SCHome>
        <div className="div-h1"></div>
      </SCHome>
    </div>
  );
}

export default Home;
