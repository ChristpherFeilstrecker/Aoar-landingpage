import "./StyledIntroSection2.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import mascote from '../../../../images/mascote1.png'

export default function IntroSection2() {
    // let navigate = useNavigate();
    //const data = useContext(GlobalContext);


    return (
        <div id="intro-section-2">

            <div className="container-section-2">
                <img className="mascot-section-2" src={mascote} alt='mascote' />

                <div className="container-text-section-2">
                    <div className="text-section-2">
                        <div><strong>AOAR </strong>é uma </div>
                        <div>empresa de Comunicação, </div>
                        <div>Fundriser e Gestão de</div>
                        <div>Invesmentos;</div>
                        <div>para PFs e PJs</div>
                    </div>
                </div>
            </div>

        </div>

    )
}