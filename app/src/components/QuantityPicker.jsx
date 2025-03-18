import { useState } from 'react';
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
    }

    function decrease() {
        if(quantity == 1) return;        

        let val = quantity - 1;
        setQuantity(val);
    }    

    return (
        <div className="qt-picker">
            <button className='btn btn-sm btn-outline-success' disabled={quantity == 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-outline-success' onClick={increase}>+</button>
        </div>
    );

}

export default QuantityPicker;



/**
 * On Product
 * create an Add  button
 * when clicked, call an add fn
 * the fn should console log any message
 */