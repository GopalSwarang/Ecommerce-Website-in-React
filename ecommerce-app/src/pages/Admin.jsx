import { useState } from "react"

function Admin({

    products,

    setProducts,

    deleteProduct

}) {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    function addProduct(e) {

        e.preventDefault()

        const newProduct = {

            id: Date.now(),

            title,

            price: Number(price),

            image

        }

        setProducts(

            [

                ...products,

                newProduct

            ]

        )

        setTitle("")
        setPrice("")
        setImage("")

    }

    return (

        <div className="admin-container">

            <h1>

                Admin Panel

            </h1>

            <form

                className="admin-form"

                onSubmit={addProduct}

            >

                <input

                    placeholder="Title"

                    value={title}

                    onChange={(e) =>

                        setTitle(e.target.value)

                    }

                />

                <input

                    placeholder="Price"

                    type="number"

                    value={price}

                    onChange={(e) =>

                        setPrice(e.target.value)

                    }

                />

                <input

                    placeholder="Image URL"

                    value={image}

                    onChange={(e) =>

                        setImage(e.target.value)

                    }

                />

                <button>

                    Add Product

                </button>

            </form>

            {

                products.map(item => (

                    <div

                        key={item.id}

                        className="admin-product"

                    >

                        <p>

                            {item.title}

                            ₹{item.price}

                        </p>

                        <button

                            onClick={() =>

                                deleteProduct(item.id)

                            }

                        >

                            Delete

                        </button>

                    </div>

                ))

            }

        </div>

    )

}

export default Admin