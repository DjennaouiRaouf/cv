import React from "react";
import TimeLine from "../../Timeline/TimeLine";
import Card from "../../Card/Card";
import Foot from "../../Foot/Foot";
import NavBar from "../../NavBar/NavBar";
import Card1 from "../../Card/Card1";
import Card2 from "../../Card/Card2";
class Cv extends React.Component{

    render() {
        return(
            <div>
                <NavBar/>
                <TimeLine/>
                <Card/>
                <Card2/>
                <Card1/>
                <Foot/>

            </div>

        )
    }
}
export default Cv;