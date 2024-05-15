import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        fetch('https://6643d5fe6c6a6565870878b1.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setItems(json);
            });
    }, []);

    const onAddToCart = obj => {
        setCartItems([...cartItems, obj]);
    };

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="App">
            {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content">
                <div className="headerForContent">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/Img/search.png" alt="Search" />
                        {searchValue && <img className="search-block__clear" onClick={() => setSearchValue('')} src="/Img/remove-on.png" alt="Clear" />}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    {items
                        .filter(item => item.title.includes(searchValue))
                        .map(item => (
                            <Card
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() => console.log('Добавили в избранное')}
                                onPlus={obj => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
