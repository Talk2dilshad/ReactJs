// MAIN COMPONENT IS CONTAINER COMPONENT.... 
import React, { Component } from 'react';
import Menu from './menu_components';
import Contact from './contactComponent';
import About from './about_component';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Header from './Headercomponent';

import Footer from './Footercomponent';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment} from '../redux/ActionCreaters';
// main component will render both menu and dishdetail

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchtoProps = (dispatch) => ({
  addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {
  constructor(props) {
      super(props);

    }
    

    render(){
      const HomePage = () =>{
        return(
          <Home 
          dish= {this.props.dishes.filter((dish)=> dish.featured)[0]}
          promotion= {this.props.promotions.filter((promo)=> promo.featured)[0]}
          leader= {this.props.leaders.filter((leader)=> leader.featured)[0]}
          />
        )
      }
      const  DishwithId=({match}) => {
        return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment = {this.props.addComment}
          />
        );
      };
      const AboutPage =()=>{
        return(
          <About leaders={this.props.leaders}/>
        );
      }

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component= {DishwithId}/>
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/aboutus' component={AboutPage} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
