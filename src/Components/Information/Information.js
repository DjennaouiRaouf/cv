import React from "react";

class Information extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            info:  {},
            img:"",
        };
    }
    componentDidMount() {
    this.setState({
        img:"assets/img/raouf_img-modified.png",
        info:{
            Nom:"Djennaoui",
            Prenom:"Raouf",
            Date_De_Naissance:"10/04/1996",
            Lieu_De_Naissance:"Bologhine Ibnou Ziri, Alger",
            Numero_De_Telephone:"(+213) 560-50-73-28",
            Adresse_Email:"djennaoui.raouf@gmail.com",
            Adress : "Cité COSIDER La fontan Villa N°9,Bouzareah,Alger",
            Diplome_De : "Université des Sciences et de la Technologie Houari-Boumédiène"
            }
    })
    }

    render(){

        return(
            <div className="container">

                <section>
                    <h1>Mes Informations</h1>
                    <div className="container">
                        <div className="container bootstrap snippets bootdey">
                            <div className="panel-body inf-content">
                                <div className="row">
                                    <div className="col-md-4 float-on-hover"><img className="img-circle img-thumbnail isTooltip" alt=""
                                                                   style={{"width": "600px"}}
                                                                   src={this.state.img}/>
                                    </div>
                                    <div className="col-md-6 float-on-hover">
                                        <div className="table-responsive">
                                            <table className="table table-user-information">
                                                <tbody>

                                                {Object.keys(this.state.info).map(key => {
                                                    return (
                                                        <tr  key={key} >
                                                            <td  style={{"fontSize":"13px" }}><strong><span
                                                                className="glyphicon glyphicon-asterisk text-primary"></span>
                                                                {key.replaceAll("_"," ")}
                                                            </strong></td>
                                                            <td className="text-primary" style={{"fontSize":"13px" }}>
                                                                {this.state.info[key]}
                                                            </td>
                                                        </tr>

                                                    );
                                                })}




                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );

    }

}
export default Information;