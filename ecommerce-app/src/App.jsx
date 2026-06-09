import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"


import "./App.css"

import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Admin from "./pages/Admin"

function App() {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [search, setSearch] = useState("")

  function addToCart(product) {

    const existingProduct = cartItems.find(item => item.id === product.id)

    if (existingProduct) {

      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCartItems(updatedCart)

    } else {

      setCartItems([...cartItems, { ...product, quantity: 1 }])

    }

  }

  function removeFromCart(index) {

    const updatedCart = cartItems.filter((item, i) => i !== index)
    setCartItems(updatedCart)

  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const [products, setProducts] = useState([
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
    }
  ])

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  return (

    <>

      <Navbar count={cartItems.length} />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <h1 className="heading">Ecommerce Web Application</h1>

              <input
                className="search"
                type="text"
                placeholder="Search Products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="products-container">

                {filteredProducts.map(item => (

                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    addCart={() => addToCart(item)}
                  />

                ))}

              </div>
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              removeItem={removeFromCart}
              total={totalPrice}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              total={totalPrice}
            />
          }
        />

        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            localStorage.getItem("auth") === "true"
              ? <Admin />
              : <Login />
          }
        />
      </Routes>



    </>

  )

}
function deleteProduct(id) {

  setProducts(products.filter(item => item.id !== id))

}

export default App