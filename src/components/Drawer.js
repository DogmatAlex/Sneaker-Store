import React from 'react';

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className="drawer">
            <div className="drawer__block">
                <h2>
                    Корзина
                    <img className="remove-btn" onClick={onClose} height={12} width={12} src="/Img/remove-on.png" alt="Close" />
                </h2>

                <div className="cartItems">
                    {items.map(obj => (
                        <div className="cartItem">
                            <img className="cartItem__img" src={obj.imgUrl} alt="Sneakers" />
                            <div className="cartItem__info">
                                <p>{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <button className="btn-remove">
                                <img height={12} width={12} src="/Img/remove-on.png" alt="Remove" />
                            </button>
                        </div>
                    ))}
                </div>

                <ul>
                    <li className="priceCheck">
                        <span>Итого:</span>
                        <div className="ellipsis"></div>
                        <b>25 998 руб.</b>
                    </li>
                    <li className="priceCheck">
                        <span>Налог 5%:</span>
                        <div className="ellipsis"></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">
                    Оформить заказ
                    <img height={27} width={27} src="/Img/arrow-right.png" alt="Arrow right" />
                </button>
            </div>
        </div>
    );
};

export default Drawer;
