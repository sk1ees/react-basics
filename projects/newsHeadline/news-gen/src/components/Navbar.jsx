import { Link } from 'react-router-dom'
const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-info border-3 fixed-top p-3">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white " to="/">NewsScenario</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar
