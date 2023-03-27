import React from "react";
import parse from "html-react-parser";
class Card extends React.Component{
     constructor(props) {
         super(props);
         this.state={
             categorie:[],
             lang:[],
             sgbd:[],
             tools:[],
             os:[]
         }
     }

     componentDidMount() {
         this.setState({
             categorie:[
                 {cat:"Langague De Programmation"},
                 {cat:"Systeme de Gestion de Base de Données"},
                 {cat:"Outils de Developpement"},
                 {cat:"Systeme d'exploitation"}
                ]
             ,
             os:[
                 {
                     id:1,
                     img:"assets/img/ubuntu.png",
                     title:"Ubuntu",
                     text:"Je maîtrise le systeme Ubuntu  <strong> (Systeme basé sur Debian) </strong>  "
                 },
                 {
                     id:2,
                     img:"assets/img/rh.png",
                     title:"RedHat",
                     text:"Je maîtrise le systeme RedHat  "
                 },
                 {
                     id:3,
                     img:"assets/img/win.png",
                     title:"Windows",
                     text:"Je maîtrise le systeme Windows  "
                 },
             ]
             ,
             sgbd:[
                 {
                     id:1,
                     img:"assets/img/orcl.png",
                     title:"SGBG Oracle",
                     text:"Je maîtrise le SGBD  <strong> ORACLE </strong>  "
                 },
                 {
                     id:2,
                     img:"assets/img/mng.png",
                     title:"SGBG No SQL MongoDB",
                     text:"Je maîtrise le SGBD  <strong> MongoDB </strong>  "
                 },
                 {
                     id:3,
                     img:"assets/img/pg.png",
                     title:"SGBG PostgreSQL",
                     text:"Je maîtrise le SGBD  <strong> PostgreSQL </strong>  "
                 },
                 {
                     id:4,
                     img:"assets/img/sqlserver.jpg",
                     title:"SGBG Microsoft SQL Server",
                     text:"Je maîtrise le SGBD  <strong> Microsoft SQL Server </strong>  "
                 },
             ]
             ,
             tools:[
                 {
                     id:1,
                     img:"assets/img/as.jpeg",
                     title:"Android studio",
                     text:"Je maîtrise d'Android studio <strong> (développement des applications mobiles sous systeme Android)</strong>  "
                 },
                 {
                     id:2,
                     img:"assets/img/id.png",
                     title:"IntelliJ IDEA",
                     text:"Je maîtrise IntelliJ IDEA qui est un environnement de développement intégré destiné au développement de logiciels informatiques reposant sur la technologie Java. Il est développé par JetBrains et disponible en deux versions, l'une communautaire, open source, sous licence Apache 2 et l'autre propriétaire, protégée par une licence commerciale. Tous deux supportent les langages de programmation Java, Kotlin, Groovy et Scala "
                 },
                 {
                     id:3,
                     img:"assets/img/pycharm.png",
                     title:"Pycharm",
                     text:"Je maîtrise  Pycharm qui est un environnement de développement intégré utilisé pour programmer en Python. Il permet l'analyse de code et contient un débogueur graphique. Il permet également la gestion des tests unitaires, l'intégration de logiciel de gestion de versions, et supporte le développement web avec Django"
                 },
                 {
                     id:4,
                     img:"assets/img/ws.png",
                     title:"WebStorm",
                     text:"Je maîtrise  WebStorm qui est un environnement de développement intégré pour JavaScript et les technologies connexes. Comme les autres IDE de JetBrains, il rend votre expérience de développement plus conviviale, en automatisant les tâches répétitives et en vous aidant à gérer les tâches complexes avec facilité."
                 },
                 {
                     id:5,
                     img:"assets/img/dg.png",
                     title:"DataGrip",
                     text:"Je maîtrise  DataGrip qui est   un environnement de gestion de base de données pour les développeurs. Il est conçu pour interroger, créer et gérer des bases de données. Les bases de données peuvent fonctionner localement, sur un serveur ou dans le cloud. Prend en charge MySQL, PostgreSQL, Microsoft SQL Server, Oracle, etc. Si vous avez un pilote JDBC"
                 },
                 {
                     id:6,
                     img:"assets/img/cl.png",
                     title:"Clion",
                     text:"Je maîtrise  Clion qui est  un environnement de développement entièrement intégré pour coder en C et C++ sous Windows, Linux et macOS."
                 },
                 {
                     id:7,
                     img:"assets/img/bs.png",
                     title:"Bootstrap Studio",
                     text:"Je maîtrise  bootstrap Studio qui est une application propriétaire de conception et de développement Web. Il offre un grand nombre de composants pour créer des pages réactives, notamment des en-têtes, des pieds de page, des galeries et des diaporamas, ainsi que des éléments de base tels que des étendues et des divs. "
                 },
                 {
                     id:8,
                     img:"assets/img/arduino.png",
                     title:"Arduino",
                     text:"Je maîtrise Arduino  qui est une marque d'une plateforme de prototypage open-source qui permet aux utilisateurs de créer des objets électroniques interactifs à partir de cartes électroniques matériellement libres sur lesquelles se trouve un microcontrôleur. Les schémas de ces cartes électroniques sont publiés en licence libre "
                 },
                 {
                     id:9,
                     img:"assets/img/odoo.png",
                     title:"Odoo",
                     text:"Je maîtrise Odoo  qui est n progiciel de gestion intégré open-source comprenant de très nombreux modules permettant de répondre à de nombreux besoins de gestion des entreprises ou de gestion de la relation client. Le logiciel est utilisé par plus de cinq millions d’utilisateurs pour gérer leurs entreprises à travers le monde. Odoo est le système ERP open-source le plus populaire. "
                 },
                 {
                     id:10,
                     img:"assets/img/talend.jpg",
                     title:"talend data integration",
                     text:"Je maîtrise  talend data integration qui est un outil permettant la gestion des données hétérogènes\n" +
                         "ou homogènes au sein d’un système d’information"
                 },

             ]
             ,
             lang:[
                 {
                     id:1,
                     img:"assets/img/java.jpeg",
                     title:"java",
                     text:"Je maîtrise le  langage Java <strong>Maven</strong> et <strong>Checkstyle</strong><br/> qui est un outil de contrôle de code, utilisé en développement de logiciel. Il permet de vérifier le style d'un code source écrit en langage Java "
                 },
                 {
                     id:2,
                     img:"assets/img/C++.png",
                     title:"c++",
                     text:"Je maîtrise le  langage C++"
                 },
                 {
                     id:3,
                     img:"assets/img/pyqt.png",
                     title:"Qt",
                     text:"Je maîtrise  Qt designer pour les application Desktop"
                 },
                 {
                     id:4,
                     img:"assets/img/r.jpeg",
                     title:"R",
                     text:"Je maîtrise le  langage statistique R "
                 },
                 {
                     id:5,
                     img:"assets/img/c.png",
                     title:"R",
                     text:"Je maîtrise le  langage C "
                 },
                 {
                     id:6,
                     img:"assets/img/django.jpg",
                     title:"Django (Python)",
                     text:"Je maîtrise le framework web django le  langage python <br/> et la conception des API REST en utilisant <strong> django-restframework </strong> et la modelisation en utilisant <strong>l'ORM django </strong> "
                 },
                 {
                     id:7,
                     img:"assets/img/python.png",
                     title:"Python",
                     text:"Je maîtrise le  langage python  "
                 },
                 {
                     id:8,
                     img:"assets/img/mp.png",
                     title:"Librairie Open Mp",
                     text:"Je maîtrise de la pribrairie du calcule haut performance OPEN-MP  "
                 },
                 {
                     id:9,
                     img:"assets/img/mpi.jpeg",
                     title:"Librairie Open Mpi",
                     text:"Je maîtrise  la pribrairie du calcule haut performance OPEN-MPI  "
                 },
                 {
                     id:10,
                     img:"assets/img/react.png",
                     title:"Librairie ReactJS",
                     text:"Je maîtrise  la pribrairie ReactJS en utilisant les composant basés sur des classes <strong> (class based components)</strong>  "
                 },

                 {
                     id:11,
                     img:"assets/img/rn.png",
                     title:"React Native",
                     text:"Je maîtrise  React Native <strong> (développement des applications mobiles multiplateforme(IOS et Android) )</strong>  "
                 },
                 {
                     id:12,
                     img:"assets/img/spring.png",
                     title:"Spring Boot",
                     text:"Je maîtrise le framework web spring boot (Java) en plus de l'ORM  <strong>(Hibernate JPA) </strong>  "
                 },
                 {
                     id:13,
                     img:"assets/img/vuejs.png",
                     title:"VueJS",
                     text:"Je maîtrise le framework web VueJS  <strong>(pour le frontend) </strong>  "
                 },
                 {
                     id:14,
                     img:"assets/img/shell.png",
                     title:"BASH",
                     text:"Je maîtrise le <strong>(SHELL) </strong>  sous linux "
                 },
                 {
                     id:15,
                     img:"assets/img/hadoop.png",
                     title:"Hadoop",
                     text:"Je maîtrise  <strong>Hadoop </strong>  est un framework libre et open source écrit en Java destiné à faciliter la création d'applications distribuées et échelonnables permettant aux applications de travailler avec des milliers de nœuds et des pétaoctets de données. Ainsi chaque nœud est constitué de machines standard regroupées en grappe. "
                 },


             ]})
     }


    render() {
        return(
          <div id="Card">
              {this.state.categorie.map((e,key) =>
              <div className="container" key={key}>
                  <section>
                      <h1 id={e.cat} >{e.cat}</h1>
                      { e.cat === "Langague De Programmation" ?
                          <div    className="container">
                              <div className="row">
                                  {this.state.lang.map((element) =>


                                      <div className="col-md-4 float-on-hover" key={element.id}>
                                          <div className="blog-card blog-card-blog">
                                              <div className="blog-card-image"><a href="/"><img alt="" className="img-fluid img"
                                                                                                src={element.img}/></a>
                                                  <div className="ripple-cont"></div>
                                              </div>
                                              <div className="blog-table">
                                                  <h6 className="blog-category blog-text-success"><i
                                                      className="far fa-newspaper"></i>&nbsp;{element.title}</h6>
                                                  <h4 className="blog-card-caption"
                                                      style={{
                                                          "margin": "-31px 0px 8px",
                                                          "marginBottom": "-6px",
                                                          "marginTop": "-26px",
                                                          "height":"40.7px"
                                                      }}><a
                                                      href="/"><br/><br/><br/></a></h4>
                                                  <p className="blog-card-description">{parse(element.text)}</p>
                                              </div>
                                          </div>
                                      </div>
                                  )}

                              </div>
                          </div>
                          : e.cat === "Systeme de Gestion de Base de Données" ?
                          <div id="db" className="container">
                              <div className="row">
                                  {this.state.sgbd.map((element) =>


                                      <div className="col-md-4 float-on-hover" key={element.id}>
                                          <div className="blog-card blog-card-blog">
                                              <div className="blog-card-image"><a href="/"><img alt="" className="img-fluid img"
                                                                                                src={element.img}/></a>
                                                  <div className="ripple-cont"></div>
                                              </div>
                                              <div className="blog-table">
                                                  <h6 className="blog-category blog-text-success"><i
                                                      className="far fa-newspaper"></i>&nbsp;{element.title}</h6>
                                                  <h4 className="blog-card-caption"
                                                      style={{
                                                          "margin": "-31px 0px 8px",
                                                          "marginBottom": "-6px",
                                                          "marginTop": "-26px",
                                                          "height":"40.7px"
                                                      }}><a
                                                      href="/"><br/><br/><br/></a></h4>
                                                  <p className="blog-card-description">{parse(element.text)}</p>
                                              </div>
                                          </div>
                                      </div>
                                  )}

                              </div>
                          </div>
                              : e.cat === "Outils de Developpement" ?

                              <div id="od" className="container">
                                  <div className="row">
                                      {this.state.tools.map((element) =>


                                          <div className="col-md-4 float-on-hover" key={element.id}>
                                              <div className="blog-card blog-card-blog">
                                                  <div className="blog-card-image"><a href="/"><img alt="" className="img-fluid img"
                                                                                                    src={element.img}/></a>
                                                      <div className="ripple-cont"></div>
                                                  </div>
                                                  <div className="blog-table">
                                                      <h6 className="blog-category blog-text-success"><i
                                                          className="far fa-newspaper"></i>&nbsp;{element.title}</h6>
                                                      <h4 className="blog-card-caption"
                                                          style={{
                                                              "margin": "-31px 0px 8px",
                                                              "marginBottom": "-6px",
                                                              "marginTop": "-26px",
                                                              "height":"40.7px"
                                                          }}><a
                                                          href="/"><br/><br/><br/></a></h4>
                                                      <p className="blog-card-description">{parse(element.text)}</p>
                                                  </div>
                                              </div>
                                          </div>
                                      )}

                                  </div>
                              </div>
                                : e.cat === "Systeme d'exploitation" &&
                                  <div id="os" className="container">
                                      <div className="row">
                                          {this.state.os.map((element) =>


                                              <div className="col-md-4 float-on-hover" key={element.id}>
                                                  <div className="blog-card blog-card-blog">
                                                      <div className="blog-card-image"><a href="/"><img alt="" className="img-fluid img"
                                                                                                        src={element.img}/></a>
                                                          <div className="ripple-cont"></div>
                                                      </div>
                                                      <div className="blog-table">
                                                          <h6 className="blog-category blog-text-success"><i
                                                              className="far fa-newspaper"></i>&nbsp;{element.title}</h6>
                                                          <h4 className="blog-card-caption"
                                                              style={{
                                                                  "margin": "-31px 0px 8px",
                                                                  "marginBottom": "-6px",
                                                                  "marginTop": "-26px",
                                                                  "height":"40.7px"
                                                              }}><a
                                                              href="/"><br/><br/><br/></a></h4>
                                                          <p className="blog-card-description">{parse(element.text)}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          )}

                                      </div>
                                  </div>




                      }
                  </section>

              </div>
              )}
          </div>
        );
    }
}
export default Card;