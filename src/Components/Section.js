
function Section(props) {
    return (
        <>
            <div className = {'absolute flex justify-center bg-stone-100 text-slate-500 h-60 w-1/2 ml-20 text-sm rounded shadow-lg'} onMouseEnter = {props.isTrue} onMouseLeave = {props.isFalse}>
                <div className = {`flex flex-col w-full p-6 `}>
                    <a href="#" className = {`font-bold`}>TopWear</a>
                    <a href="#" className = {`text-xs p-0.5 mt-2`}>T Shirts</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Casuals</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Formals</a>
                    <a href="#" className = {`font-bold pt-1 mt-2`}>BottomWear</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Jeans</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Formal-pants</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Shorts</a>
                </div>
                <div className = {`flex flex-col w-full p-6 bg-white`}>
                    <a href="#" className = {`font-bold`}>FootWear</a>
                    <a href="#" className = {`text-xs p-0.5 mt-2`}>Sports Shoes</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Casuals Shoes</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Formal Shoes</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Sneakers</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Floaters</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Flip Flops</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Socks</a>
                </div>
                <div className = {`flex flex-col w-full p-6 `}>
                    <a href="#" className = {`font-bold `}>Sports </a>
                    <a href="#" className = {`text-xs p-0.5 mt-2`}>Sports Shoes</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Sports Sandals</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Active T-Shirts</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Trac Pants</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Joggers</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Swimwears</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Tracksuits</a>
                </div>
                <div className = {`flex flex-col w-full p-6 bg-white`}>
                    <a href="#" className = {`font-bold `}>Gadgets</a>
                    <a href="#" className = {`text-xs p-0.5 mt-2`}>Smart Wearables</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Fitness Gadgets</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>HeadPhones</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Speakers</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Wallets</a>
                    <a href="#" className = {`text-xs p-0.5 mt-0.5`}>Caps & Hats</a>
                </div>
                
            </div>
        </>
    );
}

export default Section;