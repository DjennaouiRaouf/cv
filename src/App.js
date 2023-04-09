import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import "./wave.css";
import "./pulse.css"
import "./float.css"

import Error from "./Components/Base/Error/Error";
import Cv from "./Components/Pages/Cv/Cv";
import Info from "./Components/Pages/Info/Info";



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={

            isAuthenticated:false,
        }
    }
    componentDidMount() {
        this.setState({

            isAuthenticated:false,
        })
    }



    render()
  {
    return(
        <div id="App">
            <Router>
            <Switch>



                <Route exact path='/' component={Cv}/>
                <Route  path='/cv' component={Cv }/>
                <Route  path='/information' component={Info}/>
                <Route  path='*' component={Error}/>

            </Switch>
        </Router>

  </div>
    )
  }
}

export default App;
