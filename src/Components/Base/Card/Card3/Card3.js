import React from "react";
import parse from "html-react-parser";
import "./Card3.css"
class Card3 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            img:"",
            profil:""
        }
    }
    componentDidMount() {
        this.setState({
            name:"Djennaoui Raouf",
            img:"assets/img/raouf.png",
            profil:"<h6>Ingénieur en informatique, interessé par le developpement des applications \n" +
                "informatiques et des nouvelles technologies.</h6>"
        })
    }

    render() {
        return(
            <section>
                <h1 id="prof">Profil</h1>
                <section className="py-4 py-xl-5">
                    <div className="container" >
                        <div className=" border rounded border-0 border-dark overflow-hidden" style={{"background":"transparent"}} >
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="text-dark p-4 p-md-5">
                                        <h2 className="fw-bold text-dark mb-3">{this.state.name}</h2>
                                        <div className="mb-4">{parse(this.state.profil)}</div>
                                        <div className="my-3"><a className="btn btn-primary btn-lg me-2" role="button"
                                                                 href="assets/CV_RAOUF.pdf"><i className="fas fa-download"></i></a><a
                                            className="btn btn-light btn-lg" role="button" href="https://www.overleaf.com/"  target="_blank" rel="noopener noreferrer"><i
                                            className="far fa-edit"></i></a></div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-first order-md-last center" style={{"minHeight": "200px"}} ><img alt=""
                                    className="center"
                                    src={this.state.img}/></div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
export default Card3;