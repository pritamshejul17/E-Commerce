function Profile (props) {
    return (
        <>
            <div className = {`absolute flex flex-col w-0.25 p-3 left-3/4 text-sm text-slate-600 shadow-lg bg-white`} onMouseEnter = {props.isSet} onMouseLeave = {props.isUnset}>
                <div className = 'p-2 border-b-2 border-blacks'>
                    <h1 className = 'font-bold mt-2'>Welcome</h1>
                    <h2>To access acounts and manage orders</h2>
                    <button className = 'text-red-400 text-xs border-2 border-blacks font-bold p-2 mt-2 px-6'>LOGIN / SIGNUP</button>
                </div>
                <div className = 'flex flex-col p-2 border-b-2 borde-blacks text-xs'>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Orders</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Wishlist</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Gift Cards</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Contact Us</a>
                </div>
                <div className = 'flex flex-col p-2 text-xs'>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Myntra Credits</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Coupons</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Saved Cards</a>
                    <a href = '#' className = 'p-0.5 mt-0.5'>Saved VPA</a>
                </div>
            </div>
        </>
    );
}

export default Profile;