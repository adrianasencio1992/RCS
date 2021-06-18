import styled from "styled-components";

const SCDashboard = styled.section`
  display: flex;
  flex-direction:column;
  margin-top: 30px;
  
  }

  .contendor-dashboard{
      display: flex;
      flex-direction: row;
     align-items: center;
  }

  .contendor-nombre-y-eslogan{
    
  }

   .logo-navbar {
    width: 80px;
    height: 80px;
    margin-left: 30px;
  }

  .nombre-empresa {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .h1-navbar {
    margin-left: 20px;
    margin-top: 10px;
    text-transform: uppercase;
	letter-spacing: .3em;
	border: 4px double rgba(0,0,0,.25);
	border-width: 4px 0;
	padding: 1em 0em;
	width: 40em;
    font-size:16px;

  
  }

  /*ESLOGAN*/


  .div-eslogan {
    font-size:15px;
    margin-top: 5px;

  }

  .eslogan {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  .eslogan:first-of-type {
    /* For increasing performance 
                       ID/Class should've been used. 
                       For a small demo 
                       it's okaish for now */
    animation: showup 7s infinite;
  }

  .eslogan:last-of-type {
    width: 0px;
    animation: reveal 7s infinite;
  }

  .eslogan:last-of-type span {
    margin-left: -355px;
    animation: slidein 7s infinite;
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    20% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 130px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 130px;
    }
  }
`;

export default SCDashboard;
