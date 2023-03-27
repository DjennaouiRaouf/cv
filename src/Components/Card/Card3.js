import React from "react";
import parse from "html-react-parser";
class Card3 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            img:"",
            profile:""
        }
    }
    componentDidMount() {
        this.setState({
            name:"Djennaoui Raouf",
            img:"assets/img/raouf_img-modified.png",
            profile:"<h6>Ingénieure en informatique, interessé par le developpement des applications \n" +
                "informatiques et les nouvelles technologies.</h6>"
        })
    }

    render() {
        return(
            <section>
                <h1 id="prof">Profile</h1>
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
                        <div className="card border-0 shadow" style={{"backgroundColor":"#f0f0f0"}}>
                            <img src={this.state.img} alt="" style={{"width":"100px",display:block;
                                "marginLeft":"auto",
                                "marginRight":"auto"}}/>
                                <div className="card-body p-1-9 p-xl-5">
                                    <div className="mb-4">
                                        <h3 className="h4 mb-0">{this.state.name}</h3>
                                        <hr/>
                                        {parse(this.state.profile)}
                                    </div>

                                </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
        )
    }
}
export default Card3;