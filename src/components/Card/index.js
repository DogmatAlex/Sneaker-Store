import React from 'react';
import './Card.scss';

const Card = props => {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className="card">
            <img className="favorite" onClick={props.onFavorite} src="/Img/heart-unliked.png" alt="unliked" />
            <img className="sneakers-img" src={props.imgUrl} alt="Sneakers" />
            <h5>{props.title}</h5>

            <div className="card__bottom">
                <div className="priceAndBuy">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={onClickPlus}>
                    <img src={isAdded ? './Img/checked.png' : './Img/plus.png'} alt="Plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;
