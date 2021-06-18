import styled from "styled-components";

const SCHome = styled.section`
  display: flex;
  justify-content: center;
  align-item: center;
  
  }

  /*UBICACION*/
  
.div-ubicacion-principal{
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 65%;
    top: 7%;
    justify-content: flex-end;
    
}

.div-informacion{
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-top:4px;

}

.ubicacion{
    position: absolute;
    width: 70px;
    height: 70px;
    
   
}

.ubicacion2{
    position: absolute;
    width: 70px;
    height: 70px;
    visibility: visible;
    
}

.ubicacion2:hover{
    opacity: 0;

}

.h2-ubicacion{
    font-size: 16px;
    color: rgb(218,165,32);
    display:flex;
    justify-content: flex-start;
    margin-bottom: 4px;
}

.h3-ubicacion{
    font-size: 14px;
    display:flex;
    justify-content: flex-start;
    margin-bottom: 4px;
}

.div-precio{
    background-color: rgb(218,165,32);;
    width: 40px;
    height: 350px;
    z-index: 3;
    position: absolute;
    left: 97.2%;
    margin-top: 60px;
    position: fixed;
    border-radius: 10px;
}

.div-h3-precio{
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg);
    color: white;
    font-size: 20px;
    white-space: pre;
    margin-top: 280px;
    margin-right:2px;
    
}

/* BODY */

.slideshow {
  list-style-type: none;
  margin-top: 187px;
}

/** SLIDESHOW **/
.slideshow,
.slideshow:after { 
    top: -16px; /*Not sure why I needed this fix*/
    width: 100%;
    height: 100%;
    left: 0px;
    z-index: 0;
    
}

.slideshow li span { 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 171px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 30s linear infinite 0s; 
}



.slideshow li:nth-child(1) span { 
    background-image: url("/masnou.jpg"); 
}
.slideshow li:nth-child(2) span { 
    background-image: url("https://uploads-ssl.webflow.com/5976a3655fcd654cb3d604ca/5c00c9ecd82b40364fc97f4b_bridge.jpg");
    animation-delay: 6s; 
}
.slideshow li:nth-child(3) span { 
    background-image: url("https://uploads-ssl.webflow.com/5976a3655fcd654cb3d604ca/5c00c9963ea913260bb41b0e_powerlines.jpg");
    animation-delay: 12s; 
}
.slideshow li:nth-child(4) span { 
    background-image: url("https://uploads-ssl.webflow.com/5976a3655fcd654cb3d604ca/5bfa14d04ae3429879830ee4_home-hero.jpg");   
    animation-delay: 18s; 
}
.slideshow li:nth-child(5) span { 
    background-image: url("https://uploads-ssl.webflow.com/5976a3655fcd654cb3d604ca/5c00c9963ea913260bb41b0e_powerlines.jpg");
    animation-delay: 24s; 
}



@keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}


@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}


.no-cssanimations .cb-slideshow li span {
	opacity: 1;
}

 /*FORMULARIO PRESUPUESTO*/
 
 .formulario-presupuesto{
    margin-top:700px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  
 }
`;

export default SCHome;
