import "./StyledIntroSection8.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import img from '../../../../images/intro8.png'

export default function IntroSection8() {
   // let navigate = useNavigate();
   //const data = useContext(GlobalContext);
   
// <img className="logo-section-6" src={img} alt='logo' />
    return (
        <div id="intro-section-8">
          <img className="img-section8" src={img} alt='logo' />
        </div>
    )
}