import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle><h3> {dish.name} </h3></CardTitle>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
function RenderComments({ dish }) {
    if (dish != null && dish.comments != null) {
        const review = dish.comments.map(review => {
            return (
                <div key={review.id}>
                    <ul className="list-unstyled">
                        <li className="list-item"> {review.comment} </li><br />
                        <li className="list-item">--{review.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                                .format(new Date(Date.parse(review.date)))} </li>
                    </ul>
                </div>
            );
        })
        return (
            <div>
                <h4>Comments</h4>
                {review}
            </div>
        )
    } else {
        return (
            <div></div>
        );
    }
}
const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;