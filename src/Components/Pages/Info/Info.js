import React from "react";
import Information from "../../Base/Information/Information";

import Foot from "../../Base/Foot/Foot";
import NavBar from "../../Base/NavBar/NavBar";
import ButtonScroll from "../../Base/ButtonScroll/ButtonScroll";

class Info extends React.Component{
    render() {
        return(
            <div id="AboutMe">
                <NavBar/>
                <Information/>
                <Foot/>
                <ButtonScroll/>
            </div>
        )
    }
}
export default Info;