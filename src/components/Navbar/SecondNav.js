import { Link } from "react-router-dom";

const SecondNav = () => {

    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const searchValue = e.target.elements.searchInput.value;
        console.log("Search button clicked. Search query:", searchValue);
        // Add your search logic here
    };

    const handleDropdownItemClick = (value) => {
        console.log("Clicked on dropdown item:", value);
    }

    return (
        <>
            <nav style={{position: "sticky", top: "85px", zIndex: "9000" }} className="navbar bg-body-tertiary transparent">
                <div className="container-fluid d-flex gap-2 justify-content-center">

                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-funnel-fill text-warning"></i>Filter
                        </Link>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={() => handleDropdownItemClick("Action mm")}>Action mm</button></li>
                            <li><button className="dropdown-item" onClick={() => handleDropdownItemClick("Another action")}>Another action</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" onClick={() => handleDropdownItemClick("Something else here")}>Something else here</button></li>
                        </ul>
                    </div>

                    <form className="d-flex" onSubmit={handleSearch}>
                        <input id="searchInput" name="searchInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

               
            </nav>
        </>
    )
}

export default SecondNav
