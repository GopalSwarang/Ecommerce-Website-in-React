import { useState } from "react"

function Admin({
    products,
    setProducts,
    deleteProduct
}) {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const [editId, setEditId] = useState(null)

    function addProduct(e) {

        e.preventDefault()

        if (editId) {

            const updatedProducts = products.map(item =>

                item.id === editId

                    ? {
                        ...item,
                        title,
                        price: Number(price),
                        image
                    }

                    : item

            )

            setProducts(updatedProducts)

            setEditId(null)

        } else {

            const newProduct = {

                id: Date.now(),

                title,

                price: Number(price),

                image

            }

            setProducts([
                ...products,
                newProduct
            ])

        }

        setTitle("")
        setPrice("")
        setImage("")
    }

    function editProduct(product) {

        setEditId(product.id)

        setTitle(product.title)

        setPrice(product.price)

        setImage(product.image)

    }

    return (

        <div className="admin-container">

            <h1>Admin Panel</h1>

            <form
                className="admin-form"
                onSubmit={addProduct}
            >

                <input
                    type="text"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit">

                    {editId ? "Update Product" : "Add Product"}

                </button>

            </form>

            <h2>Products</h2>

            {

                products.map(item => (

                    <div
                        key={item.id}
                        className="admin-product"
                    >

                        <div>

                            <p>{item.title}</p>

                            <p>₹{item.price}</p>

                        </div>

                        <div>

                            <button
                                className="edit-btn"
                                onClick={() => editProduct(item)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => deleteProduct(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))

            }

        </div>

    )

}

export default Admin