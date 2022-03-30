// MAIN COMPONENT IS CONTAINER COMPONENT.... 
import React, { Component } from 'react';
import Menu from './menu_components';
import Contact from './contactComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Header from './Headercomponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import {PROMOTIONS} from '../shared/promotion';
import {LEADERS} from '../shared/leaders';
import Footer from './Footercomponent';
import { Switch, Route, Redirect } from 'react-router-dom';

// main component will render both menu and dishdetail

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS 
      };
    }
    
    render(){
      const HomePage = () =>{
        return(
          <Home 
          dish= {this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotion= {this.state.promotions.filter((promo)=> promo.featured)[0]}
          leader= {this.state.leaders.filter((leader)=> leader.featured)[0]}
          />
        )
      }
      const  DishwithId=({match}) => {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
        );
      };
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path="/menu/:dishId" component= {DishwithId}/>
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
