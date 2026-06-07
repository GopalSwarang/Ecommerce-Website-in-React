import "./Navbar.css"

function Navbar(props) {

    return (

        <nav>

            <h2>

                My Store

            </h2>

            <div>

                Cart: {props.count}

            </div>

        </nav>

    )

}

export default Navbar