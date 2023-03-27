import React from "react";

class Card1 extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            lang:[]
        }
    }
    componentDidMount() {
        this.setState({lang:[
                {
                    id:1,
                    img:"assets/img/eng.png",
                    text:"Anglais",
                    niv:"",
                },
                {
                    id:2,
                    img:"assets/img/france.png",
                    text:"Français",
                    niv:"C1",
                },

            ]})
    }
    render() {
        return(
            <section>
                <h1 id="lng">Langues</h1>
            <div  className="container">


                <div className="row">
                    {this.state.lang.map((element) =>
                    <div className="col-12 col-sm-6 col-lg-3 float-on-hover" key={element.id}>
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s"
                             style={{"visibility": "visible", "animationDelay": "0.4s", "animationName": "fadeInUp"}}>

                            <div className="advisor_thumb"><img src={element.img}
                                                                alt="" style={{"width": "200px"}}/>


                            </div>

                            <div className="single_advisor_details_info">
                                <h6>{element.text}</h6>
                                {
                                    element.niv !== "" &&
                                    <div>
                                        <hr/>
                                        <h6>{"Niveau: " + element.niv}</h6>
                                    </div>


                                }


                            </div>
                        </div>
                    </div>
                    )}
                </div>

            </div>
            </section>
        );
    }

}
export default Card1;