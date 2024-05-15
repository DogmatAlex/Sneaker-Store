import React from 'react';
import './Card.scss';

const Card = ({ title, imgUrl, price, onFavorite, onPlus }) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imgUrl, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className="card">
            <img className="favorite" onClick={onFavorite} src="/Img/heart-unliked.png" alt="unliked" />
            <img className="sneakers-img" src={imgUrl} alt="Sneakers" />
            <h5>{title}</h5>

            <div className="card__bottom">
                <div className="priceAndBuy">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="button" onClick={onClickPlus}>
                    <img src={isAdded ? './Img/checked.png' : './Img/plus.png'} alt="Plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;
