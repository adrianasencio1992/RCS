import styled from "styled-components";

const SCNavbar = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  color: #111;
  position: absolute;
  top: 10%;
  left: 50%;
  }

  
 

  .nav-menu {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    background-color: rgb(212,173,42);
    width: 1000px;
    height: 30px;
    align-items: center;
    border-radius: 50px;
    padding-left: 20px;
    
  }

  .link-navbar {
    margin-right: 25px;
    font-size: 16px;
    margin-top: 4.5px;
    color: white;
    
  }

  .link-navbar:hover {
    color: black;
  }

  .link-navbar2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-left: 0px;
    margin-top: 180px;
    border-radius:5px;
    height: 150px;
    width: 170px;
    background: rgb(0, 110, 147);
    z-index: 5;
    border: 2px solid red;
  }

  .link-navbar3 {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 15px;
    font-size: 16px;
    margin-top: 10px;
    width: 180px;
    height: 25px;
    color: black;
  }

  .link-navbar3:hover {
    color: red;
    text-shadow: 1px 1px red;
  }

 

  .hamburguesa {
    font-size: 30px;
    margin-right: 10px;
    color: red;
  }

  .hamburguesa:hover {
    color: transparent;
    text-shadow: 1px 1px black;
  }
`;

export default SCNavbar;
