import "./StyledIntroSection6.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import img from '../../../../images/intro5.png'

export default function IntroSection6() {
   // let navigate = useNavigate();
   //const data = useContext(GlobalContext);
   

    return (
        <div id="intro-section-6">
           <img className="logo-section-6" src={img} alt='logo' />
        </div>
    )
}