import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="headerLeft">
                <img src="/Img/logo.png" alt="logo" />
                <div className="headerLeft__info">
                    <h3>SNEAKER STORE</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img height={20} width={20} src="/Img/cart.png" alt="cart" />
                    <span>12500 руб.</span>
                </li>
                <li>
                    <img height={20} width={20} src="/Img/user.png" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
