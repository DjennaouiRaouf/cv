import React from "react";
import {HashRouter,Routes, Route,Navigate } from 'react-router-dom';


import RouteError from "./Components/Error/RouteError";
import Cv from "./Components/Pages/Cv/Cv";
import Information from "./Components/Information/Information";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";



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

    scrollToTop()
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render()
  {
    return(
        <div id="App">
            <HashRouter>
            <Routes>

                <Route exact path='*' element={<RouteError/>}></Route>

                <Route exact path='/' element={< Cv/>}></Route>
                <Route exact path='/cv' element={< Cv />}></Route>
                <Route exact path='/information' element={< AboutMe />}></Route>

                <Route
                    path="/admin"
                    element={
                        this.state.isAuthenticated ? (
                            <Information/>
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />


            </Routes>
        </HashRouter>
            <button className="btn btn-primary" type="button" style={{"fontSize": "20px",
                "borderRadius": "20px",
                "position": "fixed",
                "bottom": "20px",
                "right": "30px",
                "zIndex": "99"}}><i
                className="fas fa-arrow-up" onClick={()=>this.scrollToTop()}></i></button>
  </div>
    )
  }
}

export default App;
