import  React from "react";

class Foot extends React.Component{

    render() {
        var today = new Date(),
            date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        return(
            <footer className="text-center" style={{"background": "rgb(236,241,244)"}}>

                <div className="container text-muted py-4 py-lg-5" style={{"background": "rgb(236,241,244)"}}>
                    <ul className="list-inline">
                        <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary" >design Web</label></li>
                        <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary" >Data Warehouse</label></li>

                        <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary" >base de données</label></li>
                            <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary" >application mobile</label>

                            </li>
                    </ul>

                    <p className="mb-0 float-on-hover">{date}</p>
                </div>
            </footer>
        );
    }
}
export default  Foot;