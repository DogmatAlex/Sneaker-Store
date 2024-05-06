import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    return (
        <div className="App">
            <Drawer />
            <Header />

            <div className="content">
                <div className="headerForContent">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/Img/search.png" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    <Card />

                    <div className="card">
                        <img className="favorite" src="/Img/heart-unliked.png" alt="unliked" />
                        <img className="sneakers-img" src="/Img/Sneakers/NikeAirMax270.jpg" alt="Sneakers" />
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
                        <img className="favorite" src="/Img/heart-unliked.png" alt="unliked" />
                        <img className="sneakers-img" src="/Img/Sneakers/LebronXIX19.jpg" alt="Sneakers" />
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
                        <img className="favorite" src="/Img/heart-unliked.png" alt="unliked" />
                        <img className="sneakers-img" src="/Img/Sneakers/PumaXray.jpg" alt="Sneakers" />
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
