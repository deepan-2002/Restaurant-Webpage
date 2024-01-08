function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: '0 5px 20px #00000079' }}>
            <div className="container-fluid px-5">
                <a className="navbar-brand" href="/"><img src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Download.png" alt="logo" width={'40px'} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="/">Book Table</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu