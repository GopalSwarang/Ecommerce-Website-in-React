import { useNavigate } from "react-router-dom"

function Checkout({ cartItems, total }) {

    const navigate = useNavigate()

    function handlePayment() {

        localStorage.removeItem("cart")

        navigate("/success")

    }

    return (

        <div className="checkout-container">

            <h1>Checkout Page</h1>

            {cartItems.length === 0 ? (

                <p>Your cart is empty</p>

            ) : (

                <>

                    {cartItems.map((item, index) => (

                        <div key={index}>

                            <p>
                                {item.title} × {item.quantity} - ₹{item.price * item.quantity}
                            </p>

                        </div>

                    ))}

                    <h2 style={{ marginTop: "20px" }}>
                        Total Amount: ₹{total}
                    </h2>

                    <button className="pay-btn" onClick={handlePayment}>
                        Proceed to Payment
                    </button>

                </>

            )}

        </div>

    )

}

export default Checkout