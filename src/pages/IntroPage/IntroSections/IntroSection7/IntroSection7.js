import "./StyledIntroSection7.css";
//import { useContext } from "react";
//import GlobalContext from "../../../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import mascote2 from '../../../../images/mascote2.png'

export default function IntroSection7() {
    // let navigate = useNavigate();
    //const data = useContext(GlobalContext);


    return (
        <div id="intro-section-7">
            <div className="container-section-7">
                <img className="mascot-section-7" src={mascote2} alt='mascote' />

                <div className="container-text-section-7">
                    <div className="text-section-7">
                        <div>Agora, lê com </div>
                        <div>atenção como faremos para </div>
                        <div>facilitar e viabilizar a expansão</div>
                        <div>dos seus negócios e/ou fazer o seu capital</div>
                        <div>trabalhar para você obtendo rédo</div>
                        <div>de forma correta e tranqüila. </div>
                    </div>
                </div>
            </div>

        </div>

    )
}