import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';


    function RenderDish({dish}){// we recieve dish as props
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }
    function RenderComments({comments}){
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
                </div>
            );
        }
        else
        {
            return(<div></div>)
        }

    }
    const DishDetail =(props) =>{
        if(props.dish != null)
        {
            return(
                <div class="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments= {props.dish.comments} />
                </div>
                </div>
            );
        }
        else
        {return(<div></div>);}
        }


export default DishDetail;