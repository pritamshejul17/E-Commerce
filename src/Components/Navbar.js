import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../Assets/logo.webp'
import logo1 from '../Assets/logo1.jpg'
import bag from '../Assets/bag.jpg'
import profile from '../Assets/profile.jpg'
function Navbar(props) {
    return (
        <>
            <ul className ='flex justify-center height-auto items-center font-bold text-xs text-slate-600 shadow-md'>
                <li className = 'ml-4 px-2'><Link to =''><img className = 'h-14 w-26' src= { logo1 } alt ='logo'></img></Link></li>
                <li className = 'ml-6 py-9 px-2 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600 hover:cursor-pointer' onMouseEnter={props.onHover} onMouseLeave ={props.offHover} ><Link to = '/'>MEN</Link></li>
                <li className = 'ml-6 py-9 px-2 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600 hover:cursor-pointer' onMouseEnter={props.onHover} onMouseLeave ={props.offHover}><Link to = '/'>WOMEN</Link></li>
                <li className = 'ml-6 py-9 px-2 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600 hover:cursor-pointer' onMouseEnter={props.onHover} onMouseLeave ={props.offHover}><Link to = '/'>HOME & LIVING</Link></li>
                <li className = 'ml-6 py-9 px-2 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600 hover:cursor-pointer' onMouseEnter={props.onHover} onMouseLeave ={props.offHover}><Link to = '/'>KIDS</Link></li>
                <li className = 'ml-4 flex justify-center grow'><input type = 'text' className= {`w-2/3 p-3 hover:bg-white hover:border-2 hover:border-blacks bg-stone-100 font-normal rounded-md`} placeholder = 'Search for products brands & more'></input></li>
                <li className = 'ml-4 p-4 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600' onMouseEnter = {props.isOn} onMouseLeave = {props.isOff}>
                    <Link to = '/'>
                        <div>
                            <img className = 'h-4 w-4 mt-2 ml-3' src={ profile }/>
                            <h1 className = 'text-slate-600 p-1 font-bold'>Profile</h1>
                        </div>
                    </Link>
                </li>
                <li className = 'ml-4 p-4 py-6 mr-6 border-b-2 border-transparent hover:border-b-2 hover:border-slate-600 '>
                        <Link to='/bag'>
                            <img className = 'h-6 w-6' src={ bag }/>
                            <h1 className = 'text-slate-600 font-bold text-center'>Bag</h1>
                        </Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;