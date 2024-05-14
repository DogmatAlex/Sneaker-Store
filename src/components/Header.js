import React from 'react';

const Header = props => {
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
                <li className="headerRight__cart" onClick={props.onClickCart}>
                    <img height={22} width={22} src="/Img/cart.png" alt="cart" />
                    <span>12500 руб.</span>
                </li>
                <li className="headerRight__user">
                    <img height={22} width={22} src="/Img/user.png" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
