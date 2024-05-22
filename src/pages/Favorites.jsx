import Card from '../components/Card';

const Favorites = ({ items, onAddToFavorite }) => {
    return (
        <div className="content">
            <div className="headerForContent">
                <h1>Избранные</h1>
            </div>

            <div className="sneakers">
                {items.map(item => (
                    <Card key={item.title} title={item.title} price={item.price} imgUrl={item.imgUrl} favorited={true} onFavorite={onAddToFavorite} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
