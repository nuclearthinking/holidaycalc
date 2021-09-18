function Group(props) {

    return <div className='container'>
        <div className='row'>
            <h4>Goup 1</h4>
        </div>
        <div className='row justify-content-center'>
            <div className='col'>
                <input value='person 1'/>
            </div>
            <div className='col'>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                </div>
            </div>
        </div>

    </div>
}

function App() {
    return (
        <div className={'container'}>
            <nav className="navbar navbar-light bg-light" style={{'margin-bottom': 10}}>
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="url" aria-label="Search" disabled={true}/>
                        <button className="btn btn-outline-dark" type="button">share</button>
                    </form>
                </div>
            </nav>
            <Group/>
            <div className={'row align-content-center'} style={{'margin-top': 10}}>
                <button className={'btn btn-success btn-lg'}>+</button>
            </div>

        </div>
    );
}

export default App;
