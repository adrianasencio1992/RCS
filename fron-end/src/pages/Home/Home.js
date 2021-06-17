import React from "react";
import { Link } from "react-router-dom";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCHome from "./Home.styled";
import Text from "./Home.styled";
function Home() {
  return (
    <div>
      <SCHome>
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
      </SCHome>
    </div>
  );
}

export default Home;
