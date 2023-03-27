import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import RouteError from "./Components/Error/RouteError";
import Cv from "./Components/Pages/Cv/Cv";
import Info from "./Components/Pages/Infro/Info";



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
                <Route  path='*' component={RouteError}/>

            </Switch>
        </Router>

  </div>
    )
  }
}

export default App;
