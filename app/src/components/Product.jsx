import "./Product.css";
import QuantityPicker from './QuantityPicker';

function Product(props) {

    function add() {
        console.log("Adding prod");
    }

    return (
        <div className="product">

            <img src={props.data.image} alt=""></img>

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className='unit'>Total</label>
                <label className='unit'>Unit Price</label>
            </div>

            <div className="prices">
                <label className='total'>${props.data.price}</label>
                <label className='unit'>${props.data.price}</label>
            </div>




            <div className="controls">
                <QuantityPicker />

                <button className='btn btn-sm btn-success' onClick={add}>
                    <i className="fa-solid fa-cart-plus"></i>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;