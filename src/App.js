import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6643d5fe6c6a6565870878b1.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setItems(json);
            });
    }, []);

    return (
        <div className="App">
            {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content">
                <div className="headerForContent">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/Img/search.png" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    {items.map(obj => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imgUrl={obj.imgUrl}
                            onFavorite={() => console.log('Добавили в избранное')}
                            onPlus={() => console.log('Нажали плюс')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
