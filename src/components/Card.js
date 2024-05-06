import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <img className="favorite" src="/Img/heart-unliked.png" alt="unliked" />
            <img className="sneakers-img" src="/Img/Sneakers/NikeBlazer.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid 77</h5>

            <div className="card__bottom">
                <div className="priceAndBuy">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img height={12} width={12} src="/Img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;
