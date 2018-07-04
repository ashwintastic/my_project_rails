import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

class Cards extends React.Component {

    constructor(props){
        super(props)

    }

    generateCards(props){
        return  props.cardInfo.map( (card) =>{
            return (
                <a href = {card.videoUrl} key={card.id}>
                <div className="container">
                    <div className="card" style={{width:"200px"}}>
                        <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{width: "100%"}}/>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text some example text</p>
                        </div>
                    </div>
                </div>
                </a>
            );
        })
    }


    render () {
        let cards = this.generateCards(this.props);
        return (
            <div> {cards}</div>
        );
    }

}

export default Cards

Cards.propTypes = {
    cardInfo: PropTypes.array
};


