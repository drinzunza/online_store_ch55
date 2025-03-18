import Product from '../components/Product';
import "./Catalog.css";

const mockData = [
    {
        "title": "Strawberry",
        "price": 18.92,
        "category": "Fruit",
        "image": "/images/skdjf.png",
        "_id": "1234332"
    },
    {
        "title": "Apple",
        "price": 11.42,
        "category": "Fruit",
        "image": "/images/apple.png",
        "_id": "xnasdgfo3"
    },
];


function Catalog() {
    return (
        <div className="catalog">
            <h1>Check out amazing catalog!</h1>

            <div className="list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
}

export default Catalog;