import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(props) {

    return (

        <nav>

            <h2>My Store</h2>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/cart">Cart ({props.count})</Link>

                <Link to="/checkout">Checkout</Link>

            </div>

        </nav>

    )

}

export default Navbar