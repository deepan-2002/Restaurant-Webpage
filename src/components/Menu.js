function Menu() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: '0 5px 20px #00000079' }}>
            <div class="container-fluid px-5">
                <a class="navbar-brand" href="/"><img src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Download.png" alt="logo" width={'60px'} /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a className="nav-link" href="/"><button className="btn btn-bookTable">Book Table</button></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu