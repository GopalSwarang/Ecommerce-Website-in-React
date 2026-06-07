import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Success() {

    const navigate = useNavigate()

    useEffect(() => {

        const timer = setTimeout(() => {

            navigate("/")

        }, 3000)

        return () => clearTimeout(timer)

    }, [])

    return (

        <div className="success-container">

            <h1>🎉 Order Placed Successfully!</h1>

            <p>Thank you for shopping with us.</p>

            <p>Redirecting to home...</p>

        </div>

    )

}

export default Success