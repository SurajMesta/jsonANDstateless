import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/Sample'
import Posts from './components/Posts'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <Router>
        <nav className="navabar navbar-default">
          <div className="container">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand" > Placeholder </Link>
            <button className="navbar-toggle" data-toggle="collapse" data-target="#myDiv">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            </div>

            <div className="navbar-collapse collapse" id="myDiv">
              <ul className="nav navbar-nav">
                <li>
              <Link to="/posts">Posts</Link></li>
              
              </ul>
            
            </div>
           

          </div>
        </nav>


        <Switch>
          <Route exact path="/posts" component={Posts}/>
        </Switch>





      </Router>

      //for stateless component
      // <Sample/>
     
    )
     

    
  }
}

export default App;
