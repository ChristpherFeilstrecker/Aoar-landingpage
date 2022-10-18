import "./StyledIntroSection9.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import img from '../../../../images/intro9.png'

export default function IntroSection9() {
   // let navigate = useNavigate();
   //const data = useContext(GlobalContext);
   
// <img className="logo-section-6" src={img} alt='logo' />
    return (
        <div id="intro-section-9">
          <img className="img-section9" src={img} alt='logo' />
        </div>
    )
}