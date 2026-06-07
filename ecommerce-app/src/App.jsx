import { useState, useEffect } from "react"

import "./App.css"

import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"

function App() {

  const [cartItems, setCartItems] = useState([])
  const [search, setSearch] = useState("")

  function addToCart(product) {

    setCartItems(

      [

        ...cartItems,

        product

      ]

    )

  }

  function removeFromCart(index) {

    const updatedCart = cartItems.filter(

      (item, i) => i !== index

    )

    setCartItems(updatedCart)

  }

  const products = [

    {
      id: 1,
      title: "iPhone 16",
      price: 80000,
      image: "https://picsum.photos/300?random=1"
    },

    {
      id: 2,
      title: "Samsung S25",
      price: 70000,
      image: "https://picsum.photos/300?random=2"
    },

    {
      id: 3,
      title: "Gaming Laptop",
      price: 60000,
      image: "https://picsum.photos/300?random=3"
    },

    {
      id: 4,
      title: "Headphones",
      price: 5000,
      image: "https://picsum.photos/300?random=4"
    }

  ]

  const filteredProducts = products.filter(

    (item) => {

      return item.title

        .toLowerCase()

        .includes(

          search.toLowerCase()

        )

    }

  )

  return (

    <>

      <Navbar count={cartItems.length} />

      <h1 className="heading">

        Ecommerce Web Application

      </h1>

      <input

        className="search"

        type="text"

        placeholder="Search Products"

        value={search}

        onChange={(e) => setSearch(e.target.value)}

      />

      <div className="products-container">

        {

          products.map((item) => {

            return (

              <ProductCard

                key={item.id}

                title={item.title}

                price={item.price}

                image={item.image}

                addCart={() => addToCart(item)}

              />

            )

          })

        }

      </div>

      <Cart

        items={cartItems}

        removeItem={removeFromCart}

      />

    </>

  )

}

export default App