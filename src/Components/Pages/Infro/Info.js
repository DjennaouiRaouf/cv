import React from "react";
import Information from "../../Information/Information";

import Foot from "../../Foot/Foot";
import NavBar from "../../NavBar/NavBar";
import ButtonScroll from "../../ButtonScroll/ButtonScroll";

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