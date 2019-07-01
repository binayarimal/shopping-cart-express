import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/landing';
import SignIn from './components/signIn';
import SignUp from './components/signUp'
import ShopList from './components/shopping';
import Items from './components/items';
import ShopListEdit from './components/shopListEdit';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'


class App extends Component {

  constructor(){
    super()
    this.state={
      user:null
    }
  }

  signOut(e){
    e.preventDefault();
    fetch("/users/signOut")
    .then( () => {
      localStorage.removeItem('user');
      window.location.reload();} )
      .catch(err => console.log(err));
    }

    routeAccess(){
      if(this.state.user !== null){
      return ( [



         <li key = {3}>
         <Link className="nav-link" to= '/ShopList' >ShopList <span className="sr-only">(current)</span></Link>
         </li>,
          <button className=" btn btn-danger float-left" onClick= {(e)=>this.signOut(e)}>Sign Out </button>
       ])
      } else{
       return ([<li key = {4}>
        <Link className="nav-link" to={'/signIn'}>Sign In <span className="sr-only">(current)</span></Link>
        </li>,
        <li key = {5}>
        <Link className="nav-link" to={'/signUp'}>Sign Up <span className="sr-only">(current)</span></Link>
        </li>])

      }
    }
    componentDidMount(){
      const user = localStorage.getItem("user");
      if(user){
        this.setState({user:user});

      } else{
        this.setState({user:null});

      }
    }
    render() {
      return (

        <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Shopping Cart</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active" key = {2}>
          <Link to = {`/`}  className="nav-link">Home<span className="sr-only">(current)</span></Link>
        </li>
        {this.routeAccess()}
        </ul>

        </div>
        </nav>
        </header>
        <main>
        <Route exact path="/" component={Landing}  />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/ShopList" component={ShopList} />
        <Route exact path="/ShopList/:id" component={Items} />
        <Route exact path="/ShopList/:id/edit" component={ShopListEdit} />

        </main>
        </div>


      );
    }
  }

  export default App;
