import React from 'react';
// import styles from '../styles'
function Cards(props) {
    return (
        <div>
            <div className="card-container">
            <div className="card-calendar">
                <h1>{props.date}</h1>
                <p>{props.monthName}</p>
                
            </div>
            <div className="cardbutton">
                <button>
                    View Details
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Cards;