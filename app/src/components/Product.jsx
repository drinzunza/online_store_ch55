import "./Product.css";
import QuantityPicker from './QuantityPicker';

function Product() {

    function add() {
        console.log("Adding prod");
    }

    return (
        <div className="product">
            <h5>Title Here</h5>


            <QuantityPicker />

            <button className='btn btn-sm btn-success' onClick={add}>
                <i className="fa-solid fa-cart-plus"></i>
                Add
            </button>
        </div>
    );
}

export default Product;