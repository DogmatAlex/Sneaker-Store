import React from 'react';
import './Card.scss';

const Card = props => {
    const onClickButton = () => {
        alert(props.title);
    };

    return (
        <div className="card">
            <img className="favorite" src="/Img/heart-unliked.png" alt="unliked" />
            <img className="sneakers-img" src={props.imgUrl} alt="Sneakers" />
            <h5>{props.title}</h5>

            <div className="card__bottom">
                <div className="priceAndBuy">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img height={12} width={12} src="/Img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;
