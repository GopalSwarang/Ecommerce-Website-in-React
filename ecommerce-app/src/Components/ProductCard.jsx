import "./ProductCard.css"

function ProductCard(props) {

  return (

    <div className="product-card">

      <img

        src={props.image}

        alt={props.title}

      />

      <h2>

        {props.title}

      </h2>

      <p>

        Price: ₹{props.price}

      </p>

      <button onClick={props.addCart}>

        Add To Cart

      </button>

    </div>

  )

}

export default ProductCard