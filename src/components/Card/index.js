import React from 'react';
import './Card.scss';

const Card = ({ title, imgUrl, price, onPlus, onFavorite, favorited = false }) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ title, imgUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ title, imgUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card">
            <img className="favorite" onClick={onClickFavorite} src={isFavorite ? '/Img/liked.png' : '/Img/unliked.png'} alt="unliked" />
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
