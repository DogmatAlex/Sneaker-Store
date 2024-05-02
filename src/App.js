function App() {
    return (
        <div className="App">
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

            <div className="content">
                <h1>Все кроссовки</h1>

                <div className="sneakers">
                    <div className="card">
                        <img width={133} height={130} src="/Img/Sneakers/NikeBlazer.jpg" alt="Sneakers" />
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

                    <div className="card">
                        <img width={133} height={130} src="/Img/Sneakers/NikeAirMax270.jpg" alt="Sneakers" />
                        <h5>Мужские кроссовки Nike Air Max 270</h5>

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

                    <div className="card">
                        <img width={133} height={130} src="/Img/Sneakers/LebronXIX19.jpg" alt="Sneakers" />
                        <h5>Мужские кроссовки Nike Lebron XIX EP 19</h5>

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

                    <div className="card">
                        <img width={133} height={130} src="/Img/Sneakers/PumaXray.jpg" alt="Sneakers" />
                        <h5>Мужские кроссовки PUMA X-Ray Speed</h5>

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
                </div>
            </div>
        </div>
    );
}

export default App;
