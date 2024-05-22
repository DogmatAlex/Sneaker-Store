import React from 'react';
import Card from '../components/Card';

const Home = ({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart }) => {
    return (
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
    );
};

export default Home;
