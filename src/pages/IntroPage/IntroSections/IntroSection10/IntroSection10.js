import "./StyledIntroSection10.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import logo from '../../../../images/AOAR_logo.png'

export default function IntroSection10() {
   // let navigate = useNavigate();
   //const data = useContext(GlobalContext);
   

    return (
        <div id="intro-section-10">
           <img className="logo-section-10" src={logo} alt='logo' />
        </div>
    )
}