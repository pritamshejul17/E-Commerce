import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../Assets/logo.webp'
function Navbar() {
    return (
        <>
            <ul className ='flex justify-center items-center p-3 font-bold text-xs text-slate-600 shadow-md'>
                <li className = 'ml-4 px-2'><Link to =''><img className = 'h-14 w-26' src= { logo } alt ='logo'></img></Link></li>
                <li className = 'ml-6 px-2'><Link to = '/shop'>MEN</Link></li>
                <li className = 'ml-6 px-2'><Link to = '/shop'>WOMEN</Link></li>
                <li className = 'ml-6 px-2'><Link to = '/shop'>HOME & LIVING</Link></li>
                <li className = 'ml-6 px-2'><Link to = '/shop'>KIDS</Link></li>
                <li className = 'ml-4 flex justify-center grow'><input type = 'text' className= {`w-2/3 p-3 hover:bg-white hover:border-2 hover:border-blacks bg-stone-100 font-normal rounded-md`} placeholder = 'Search for products brands & more'></input></li>
                <li className = 'ml-4 px-2'><Link to = '/shop'>Profile</Link></li>
                <li className = 'ml-4 px-2'><Link to = '/shop'>Wishlist</Link></li>
                <li className = 'ml-4 px-2 mr-4'><Link to = '/shop'>Bag</Link></li>
            </ul>
        </>
    );
}

export default Navbar;