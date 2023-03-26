import React from "react";
import Information from "../../Information/Information";

import Foot from "../../Foot/Foot";
import NavBar from "../../NavBar/NavBar";

class AboutMe extends React.Component{
    render() {
        return(
            <div id="AboutMe">
                <NavBar/>
                <Information/>
                <Foot/>
            </div>
        )
    }
}
export default AboutMe;