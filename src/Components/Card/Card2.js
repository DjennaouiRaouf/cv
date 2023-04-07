import React from "react";
class Card2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            projets:[],
        }
    }
    componentDidMount() {
        this.setState({projets:[
                {
                    id:1,
                    annee:2019,
                    title:"Projet de licence",
                    text:"Conception d’une application mobile comparateur de prix de produit de consommation (Android Studio,Java,PHP,Python)"
                },
                {
                    id:2,
                    annee:2021,

                    title:"Projet de biométrie",
                    text:"Application basée sur l'intelligence artificielle qui procède à l'identification du haut-parleur et d'autoriser l'accès au système aux utilisateurs  légitimes (Biométrie) (Python,MongoDB)"
                },
                {
                    id:3,
                    annee:2021,
                    title:"Projet du master",
                    text:"Conception d’un filtre anti-spam en utilisant les algorithmes d’apprentissage automatique (Machine Learning) dans une plateforme Big Data. (Python, Django,OpenMPI,CSV,Hadoop)"
                },
                {
                    id:4,
                    annee:2022,
                    title:"Projet Cash Assurance",
                    text:"Création d'une plate-forme Web destinée aux experts d'assurance afin qu'ils puissent envoyer leurs rapports d'expertises à la direction générale sans se déplacer (ReactJS, Dotnet,MS-SQLServer)"
                },
                {
                    id:5,
                    annee:2022,
                    title:"Projet Cash Assurance",
                    text:"Création d'une plate-forme Web e-paiement pour que les clients puissent souscrire une assurance et avoir un devis en ligne"
                }
            ]})
    }

    render() {
        return(
            <section>
                <h1 id="proj">Projets</h1>
            <div  className="container-fluid" >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card" style={{"backgroundColor":"#f0f0f0"}}>
                            <div className="card-body">
                                <h4 className="card-title mb-5"> </h4>

                                <div className="hori-timeline" dir="ltr">
                                    <ul className="list-inline events">
                                        {this.state.projets.map((element) =>
                                        <li className="list-inline-item event-list pulse-grow-on-hover" key={element.id}>
                                            <div className="px-4">
                                                <div className="event-date bg-soft-primary text-primary">{element.annee}</div>
                                                <h5 className="font-size-16 hiding">{element.title}</h5>
                                                <p className="text-muted">{element.text}</p>

                                            </div>
                                        </li>
                                        )}


                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </section>
        );
    }
}
export default Card2;