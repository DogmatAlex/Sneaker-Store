import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        axios.get('https://6643d5fe6c6a6565870878b1.mockapi.io/items').then(res => {
            setItems(res.data);
        });
        axios.get('https://6643d5fe6c6a6565870878b1.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        });
        axios.get('https://664d17e7ede9a2b55652a403.mockapi.io/favorites').then(res => {
            setFavorites(res.data);
        });
    }, []);

    const onAddToCart = async obj => {
        await axios.post('https://6643d5fe6c6a6565870878b1.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
    };

    const onRemoveItem = async id => {
        await axios.delete(`https://6643d5fe6c6a6565870878b1.mockapi.io/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    };

    const onAddToFavorite = obj => {
        axios.get('https://664d17e7ede9a2b55652a403.mockapi.io/favorites', obj); // запрос на другой сервер (oper-AS)
        setFavorites(prev => [...prev, obj]);
    };

    return (
        <div className="App">
            {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToCart={onAddToCart}
                        />
                    }
                />
                <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />
            </Routes>
        </div>
    );
}

export default App;
