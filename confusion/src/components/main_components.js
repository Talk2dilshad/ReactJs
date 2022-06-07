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
import {postComment,fetchComments,fetchDishes, fetchPromos,fetchLeaders,postFeedback} from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
// main component will render both menu and dishdetail

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

// const mapDispatchtoProps 
const mapDispatchtoProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  
  
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  
  fetchComments: () => dispatch(fetchComments()),
  
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  
  
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),

});

class Main extends Component {
  
    componentDidMount(){
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
    }    

    render(){
      const HomePage = () =>{
        return(
          <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading ={this.props.dishes.isLoading}
          dishesError_message = {this.props.dishes.error_message}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoError_message={this.props.promotions.error_message}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading = {this.props.leaders.isLoading}
          leadersError_message={this.props.leaders.error_message}
          />
        )
      }
      const  DishwithId=({match}) => {
        return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
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
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component= {DishwithId}/>
              <Route exact path="/contactus" component={ () => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route exact path='/aboutus' component={ () =>  <AboutPage leaders= {this.props.leaders}/>}/>
              <Redirect to="/home" />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
        <Footer/>
      </div>
    );
  }
} 

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
