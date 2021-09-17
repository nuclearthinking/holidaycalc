import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className={'container'}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="url" aria-label="Search" disabled={true}/>
                        <button className="btn btn-outline-dark" type="submit">share</button>
                    </form>
                </div>
            </nav>
            <div className={'row align-content-center'}>
                <button className={'btn btn-success btn-lg'}>+</button>
            </div>
        </div>
    );
}

export default App;
