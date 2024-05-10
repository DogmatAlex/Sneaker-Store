import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const sneakers = [
    { title: 'Мужские кроссовки Nike Blazer Mid 77', price: '11 500', imgUrl: '/Img/Sneakers/NikeBlazer.jpg' },
    { title: 'Мужские кроссовки Nike Air Max 270', price: '12 999', imgUrl: '/Img/Sneakers/NikeAirMax270.jpg' },
    { title: 'Мужские кроссовки Nike Lebron XIX EP 19', price: '14 500', imgUrl: '/Img/Sneakers/LebronXIX19.jpg' },
    { title: 'Мужские кроссовки PUMA X-Ray Speed', price: '9 500', imgUrl: '/Img/Sneakers/PumaXray.jpg' },
];

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
                    {sneakers.map(obj => (
                        <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
                    ))}
                    ;
                </div>
            </div>
        </div>
    );
}

export default App;
