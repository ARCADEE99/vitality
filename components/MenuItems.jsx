import Link from "next/link";

const MenuItems = ({ isFullscreen, toggleMenu }) => {
 return (
 <div className={`lg:flex lg:flex-col lg:text-center lg:justify-center lg:text-h3 lg:font-bold lg:gap-12 flex flex-row text-nav gap-8 font-regular ${isFullscreen ? "fullscreen" : ""}`}>
 <Link href="/" className="nav_items" onClick={toggleMenu}> Home </Link>
 <Link href="/about" className="nav_items" onClick={toggleMenu}> About us </Link>
 <Link href="/services" className="nav_items" onClick={toggleMenu}> Our Services </Link>
 <Link href="#" className="nav_items" onClick={toggleMenu}> The Process </Link>
 <Link href="#" className="nav_items" onClick={toggleMenu}> Portfolio </Link>
 </div>
 );
};

export default MenuItems;
