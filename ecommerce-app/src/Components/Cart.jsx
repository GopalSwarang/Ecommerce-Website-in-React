function Cart(props) {

return (

<div className="cart-container">

<h2>Cart Items</h2>

{props.items.length === 0 ? (

<p>No items in cart</p>

) : (

props.items.map((item, index) => (

<div className="cart-item" key={index}>

<p>
{item.title} × {item.quantity} - ₹{item.price * item.quantity}
</p>

<button onClick={() => props.removeItem(index)}>
Remove
</button>

</div>

))

)}

{props.items.length > 0 && (

<h3 style={{ marginTop: "20px" }}>
Total: ₹{props.total}
</h3>

)}

</div>

)

}

export default Cart