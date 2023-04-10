import React from "react";
import "./TimeLine.css"
class TimeLine extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            parcours:[]
        }
        this.timer = null;
        this.parcours=[
            {
                id:1,
                annee:"2014",
                titre:"Obtention du Bac",
                texte:"Obtention du Bac série Science de la nature et de la vie mention A.Bien "

            },
            {
                id:2,
                annee:"2019",
                titre:"Obtention de la licence",
                texte:"Obtention de la licence en informatique academique "

            },
            {
                id:3,
                annee:"2021",
                titre:"Obtention du master",
                texte:"Obtention du master en bio-informatique"

            },
            {
                id:4,
                annee:"2022",
                titre:"Cash Assurance",
                texte:"Recrutement au sein la compagnie d'assurance des hydrocarbures (Cash assurance) en tant qu'ingénieur en informatique au niveau de la sous-direction de développement"

            },
        ];

    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.parcours.length > 0) {
                this.setState(prevState => ({
                    parcours: [...prevState.parcours, this.parcours.shift()]
                }));
            } else {
                clearInterval(this.timer);
            }
        }, 1500);
    }
    

    render() {
        return(
            <div className="container">
                {this.state.parcours.length > 0 &&
                <section>

                    <h1 id="p">Mon Parcours</h1>
                    <div  className="container" >
                        <h3 className="card-title"> </h3>
                        <div className="row">
                            <div className="col-md-12 animate fadeInDown two" >
                                <div className="main-timeline4 ">
                                    {this.state.parcours.map((parcours) =>
                                        <div className="timeline animate fadeInDown two " key={parcours.id}>
                                            <span className="timeline-icon"></span>
                                            <span className="year pulse-grow-on-hover">{parcours.annee}</span>
                                            <div className="timeline-content pulse-grow-on-hover">
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
                    }
            </div>

        );
    }
}
export default TimeLine;