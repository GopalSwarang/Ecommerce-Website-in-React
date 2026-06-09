import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem("user"))

        if (user && user.email === email && user.password === password) {

            localStorage.setItem("auth", "true")

            navigate("/admin")

        } else {

            alert("Invalid credentials")

        }

    }

    return (

        <div className="auth-container">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

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

                <button type="submit">Login</button>

            </form>

            <p onClick={() => navigate("/signup")}>
                Create account
            </p>

        </div>

    )

}

export default Login