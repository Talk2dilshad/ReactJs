// MAIN COMPONENT IS CONTAINER COMPONENT.... 
import React, { Component } from 'react';
import Menu from './menu_components';
import Contact from './contactComponent';
import Home from './HomeComponent';
// import DishDetail from './DishdetailComponent';
import Header from './headercomponent';
import {DISHES} from '../shared/dishes';
import Footer from './footercomponent';
import { Switch, Route, Redirect } from 'react-router-dom';

// main component will render both menu and dishdetail

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
    }
    
    render(){
      const HomePage = () =>{
        return(
          <Home/>
        )
      }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
