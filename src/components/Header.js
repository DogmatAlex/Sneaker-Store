import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <Link to="/">
                <div className="headerLeft">
                    <img src="/Img/logo.png" alt="logo" />
                    <div className="headerLeft__info">
                        <h3>SNEAKER STORE</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="headerRight">
                <li className="headerRight__cart" onClick={props.onClickCart}>
                    <img height={23} width={23} src="/Img/cart.png" alt="cart" />
                    <span>12500 руб.</span>
                </li>
                <li className="headerRight__liked">
                    <Link to="./favorites">
                        <img height={23} width={24} src="/Img/unliked.png" alt="liked" />
                    </Link>
                </li>
                <li className="headerRight__user">
                    <img height={23} width={23} src="/Img/user.png" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
