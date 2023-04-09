import React from "react";
import TimeLine from "../../Base/TimeLine/TimeLine";
import Card from "../../Base/Card/Card";
import Foot from "../../Base/Foot/Foot";
import NavBar from "../../Base/NavBar/NavBar";
import Card1 from "../../Base/Card/Card1";
import Card2 from "../../Base/Card/Card2";
import ButtonScroll from "../../Base/ButtonScroll/ButtonScroll";
import Card3 from "../../Base/Card/Card3";
class Cv extends React.Component{

    render() {
        return(
            <div>
                <NavBar/>
                <Card3/>
                <TimeLine/>
                <Card/>
                <Card2/>
                <Card1/>
                <Foot/>
                <ButtonScroll/>
            </div>

        )
    }
}
export default Cv;