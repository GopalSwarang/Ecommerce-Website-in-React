import { useNavigate } from "react-router-dom"

function Admin() {

const navigate = useNavigate()

function logout() {

localStorage.removeItem("auth")

navigate("/login")

}

return (

<div className="admin-container">

<h1>Admin Panel</h1>

<p>Welcome Admin 👨‍💻</p>

<button onClick={logout}>
Logout
</button>

</div>

)

}

export default Admin