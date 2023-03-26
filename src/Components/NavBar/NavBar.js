import React from "react";
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            img:"",
            username:"",

        }
    }
    componentDidMount() {
        this.setState({
            img:"assets/img/raouf_img-modified.png",
            username:"Djennaoui Raouf",

        })
    }
    scrolldiv(elemId) {
        var elem = document.getElementById(elemId);
        elem.scrollIntoView();
    }
    render() {


        return(

                <nav className="navbar navbar-light navbar-expand-md py-3" style={{"background": "rgb(236,241,244)"}}>
                    <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span
                        style={{"fontSize": "16px"}}><img src={this.state.img} width="51" alt=""
                                                      height="51"/><strong><em>&nbsp;{this.state.username}</em></strong></span></a>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                            className="visually-hidden">Toggle navigation</span><span
                            className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item ">
                                <div className="dropdown show">
                                    <Link className="nav-link dropdown-toggle float-on-hover" aria-expanded="true"
                                          data-bs-toggle="dropdown" to="/cv">Cv</Link>
                                    <div className="dropdown-menu " data-bs-popper="none" style={{"background": "rgb(236,241,244)"}}>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("p")}>Parcours</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("Langague De Programmation")}>Langage de programmation</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("Systeme de Gestion de Base de Données")}>Base de données</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("Outils de Developpement")}>Outils de developpement</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("Systeme d'exploitation")}>Systemes d'exploitation</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("proj")}>Projets</Link>
                                        <Link className="dropdown-item" to="/cv" onClick={()=>this.scrolldiv("lng")}>Langues</Link>
                                    </div>

                                    </div>
                                </li>

                                <li className="nav-item "><Link className="nav-link float-on-hover" to="/information">À propos de moi</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>


    );
    }
}

export default NavBar;