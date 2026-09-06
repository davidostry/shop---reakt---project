import './Header.css'
import { Link } from 'react-router'

export default function Header() {
    return (
        <div className='navMain'>
            <h1>Mini Shop</h1>

            <Link className='navLinks' to="/products">products</Link>
            <Link className='navLinks' to="/favorites ❤️">favorites</Link>

        </div>
    )
}
