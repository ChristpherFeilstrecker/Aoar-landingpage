import "./StyledIntroSection1.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import logo from '../../../../images/AOAR_logo.png'

export default function IntroSection1() {
   // let navigate = useNavigate();
   //const data = useContext(GlobalContext);
   

    return (
        <div id="intro-section-1">
           <img className="logo-section-1" src={logo} alt='logo' />
        </div>
    )
}