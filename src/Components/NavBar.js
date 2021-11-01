import { Link } from 'react-router-dom';

function NavBar(props) {


    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">

                <nav className="navbar navbar-dark bg-dark p-0">
                    <div className="container-fluid">
                        <Link className="navbar-brand m-1 p-0 d-flex align-items-center" to="/">
                            <img style={{ borderRadius: '50%' }} src="https://www.freevector.com/uploads/vector/preview/15926/FreeVector-Sun-And-Moon-Vector.jpg" alt="" width="40" height="40" className="d-inline-block align-text-top me-2" />
                            Weather App
                        </Link>
                    </div>
                </nav>
                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search your city" aria-label="Search" value={props.value} onChange={props.onChange} />

                    <Link type='submit' className="btn btn-outline-primary" onClick={props.clickHandler} to={`/${props.value}`}>Search</Link>
                </div>
            </div>
        </nav >
    )
}

export default NavBar
