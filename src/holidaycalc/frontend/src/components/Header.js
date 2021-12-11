export default function Header() {

    return <nav className="navbar navbar-light bg-light" style={{'margin-bottom': 10}}>
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="url" aria-label="Search" disabled={true}/>
                <button className="btn btn-outline-dark" type="button">share</button>
            </form>
        </div>
    </nav>
}