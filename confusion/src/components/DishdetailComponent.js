import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Modal,ModalBody,ModalHeader,Label,Col,Row, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength= (len) => (val) => val && (val.length >= len);

// task 1 Add a new class component named CommentForm that will add a button to the view 
    export class CommentForm  extends Component {
        constructor(props){
            super(props);

            this.toggleModal = this.toggleModal.bind(this);
            this.state= {
                isModalOpen : false
            };
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values){
            this.toggleModal();
            this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
        }

        render() {
            return (
                <div>
                    <Button color='secondary' outline onClick={this.toggleModal}>
                        <span className='fa fa-pencil fa-lg'>Submit Comment</span>
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

                    <ModalBody> 
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label md={12} htmlFor="author" >Your Name</Label>
                            <Col md={12}>
                            <Control.text model=".author" id="author" name="author"
                             place holder="Your Name"
                             className="form-control"
                             validators= {{
                                 required,minLength:minLength(3),maxLength: maxLength(15)
                             }}
                            />
                            <Errors className="text-danger" model=".author" show="touched"
                            messages={{
                                required:'Required',
                                minLength:'<3',
                                maxLength:'>15'
                            }}
                            />
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                    </Modal>
                </div>

            );
        }
    }
 

    function RenderDish({dish}){// we recieve dish as props
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={baseUrl+dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }
    function RenderComments({comments, dishId,postComment}){
        if(comments != null)
        {
            const commentlist= comments.map( (comment) => {
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentlist}
                    </ul>
                    <CommentForm dishId={dishId} 
                        postComment= {postComment}
                    />
                    {/* <CommentForm /> */}
                </div>
            );
        }
        else
        {
            return(<div></div>)
        }

    }
    const DishDetail =(props) =>{
        if(props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if( props.error_message){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.error_message}</h4>
                    </div>
                </div>
            );
        }
        if(props.dish != null)
        {
            return(
                <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments= {props.comments} 
                    postComment= {props.postComment}
                    dishId={props.dish.id}
                    />
                </div>
                </div>
            );
        }
        else
        {return(<div></div>);}
        }


export default DishDetail;