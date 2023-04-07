import React from "react";
class TimeLine extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            parcours:[]
        }
    }
    componentDidMount() {
        this.setState({parcours:[
                {
                    id:1,
                    annee:"2014",
                    titre:"Obtention du Bac",
                    texte:"j'ai obtenu mon Bac série Science de la nature et de la vie mention A.Bien "

                },
                {
                    id:2,
                    annee:"2019",
                    titre:"Obtention de la licence",
                    texte:"j'ai obtenue ma licence en informatique academique "

                },
                {
                    id:3,
                    annee:"2021",
                    titre:"Obtention du master",
                    texte:"j'au obtenu mon master en bio-informatique"

                },
                {
                    id:4,
                    annee:"2022",
                    titre:"Cash Assurance",
                    texte:"En 2022 j'ai commencé à travailler à la compagnie d'assurance des hydrocarbures (Cash assurance) en tant qu'ingénieur en informatique au niveau de la sous-direction de développement"

                },
            ]})
    }


    render() {
        return(
            <div className="container">
                <section>
                    <h1 id="p">Mon Parcours</h1>
                    <div  className="container" >
                        <h3 className="card-title"> </h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-timeline4 ">
                                    {this.state.parcours.map((parcours) =>
                                        <div className="timeline pulse-grow-on-hover" key={parcours.id}>
                                            <span className="timeline-icon"></span>
                                            <span className="year">{parcours.annee}</span>
                                            <div className="timeline-content">
                                                <h3 className="title">{parcours.titre}</h3>
                                                <p className="description">
                                                    {parcours.texte}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
export default TimeLine;