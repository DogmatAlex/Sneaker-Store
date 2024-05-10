import React from 'react';

const Drawer = () => {
    return (
        <div style={{ display: 'none' }} className="drawer">
            <div className="drawer__block">
                <h2>
                    Корзина
                    <img className="remove-btn" height={12} width={12} src="/Img/remove-on.png" alt="Remove" />
                </h2>

                <div className="cartItems">
                    <div className="cartItem">
                        <img className="cartItem__img" src="/Img/Sneakers/NikeBlazer.jpg" alt="Sneakers" />
                        <div className="cartItem__info">
                            <p>Мужские кроссовки Nike Blazer Mid 77</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="btn-remove">
                            <img height={12} width={12} src="/Img/remove-on.png" alt="Remove" />
                        </button>
                    </div>
                    <div className="cartItem">
                        <img className="cartItem__img" src="/Img/Sneakers/NikeBlazer.jpg" alt="Sneakers" />
                        <div className="cartItem__info">
                            <p>Мужские кроссовки Nike Blazer Mid 77</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="btn-remove">
                            <img height={12} width={12} src="/Img/remove-on.png" alt="Remove" />
                        </button>
                    </div>
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
