import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignup(e) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        localStorage.setItem("user", JSON.stringify(user))

        alert("Account created!")

        navigate("/login")

    }

    return (

        <div className="auth-container">

            <h2>Signup</h2>

            <form onSubmit={handleSignup}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Signup</button>

            </form>

            <p onClick={() => navigate("/login")}>
                Already have account
            </p>

        </div>

    )

}

export default Signup