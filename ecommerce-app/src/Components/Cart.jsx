function Cart(props) {

    return (

        <div className="cart-container">

            <h2>

                Cart Items

            </h2>

            {

                props.items.length === 0 ?

                    (

                        <p>

                            No items in cart

                        </p>

                    )

                    :

                    (

                        props.items.map((item, index) => {

                            return (

                                <div
                                    className="cart-item"
                                    key={index}
                                >

                                    <p>

                                        {item.title}

                                        -

                                        ₹{item.price}

                                    </p>

                                    <button

                                        onClick={() => props.removeItem(index)}

                                    >

                                        Remove

                                    </button>

                                </div>

                            )

                        })

                    )

            }

        </div>

    )

}

export default Cart