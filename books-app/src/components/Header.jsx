import '../App.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Logo Books App</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success cart" type="submit">
                        <AiOutlineShoppingCart /> (0)
                    </button>
                </form>
            </div>
        </nav>
    );
}
export default Header;