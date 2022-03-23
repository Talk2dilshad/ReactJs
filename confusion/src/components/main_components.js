// MAIN COMPONENT IS CONTAINER COMPONENT.... 
import React, { Component } from 'react';
import Menu from './menu_components';
import DishDetail from './DishdetailComponent';
import Header from './headercomponent';
import {DISHES} from '../shared/dishes';
import Footer from './footercomponent';
// main component will render both menu and dishdetail

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
    }
    onDishSelect(dishId){
        this.setState({selectedDish: dishId});
    }
    render(){
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} 
            onClick= {(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
        <Footer/>
      </div>
    );
  }
}

export default Main;
