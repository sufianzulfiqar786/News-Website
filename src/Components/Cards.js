import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'
import '../CSS/Cards.css';


export class Cards extends Component {



    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card " >
                    <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,32)}...</h5>
                        <p className="card-text">{description.slice(0,40)}...</p>
                        <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
