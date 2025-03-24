import Discounts from '../components/Discounts';
import ProductAdmin from '../components/ProductAdmin';
import "./Admin.css";

function Admin() {
    return (
        <div className="admin page">
            <h1>Store administration</h1>

            <div className="parent">
                <section>
                    <ProductAdmin />
                </section>
                
                <section>
                    <Discounts />
                </section>
            </div>
        </div>
    );
}


export default Admin;

/**
 * Create an ProductAdmin component
 * render it in the first section of admin
 * 
 * The component should display a form for:
 * - Title
 * - Price
 * - Image (url)
 * - Catgory
 * 
 * have a button to Save
 * when the button is clicked, call a save fn
 * save fn should console log a message
 *
 */