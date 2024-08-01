import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
//import { clearCart } from "../../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    let parsedUser = null;

    if (user) {
        try {
          parsedUser = JSON.parse(user);
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }

    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
        toast.success("Logout Success");
        localStorage.removeItem('cart');
    }

    const cartItems = useSelector((state) => state.cart);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    // navList Data
    const navList = (
        <ul className="flex flex-wrap space-x-6 font-medium text-md px-5 mx-auto">
            {/* Home */}
            <li>
                <Link to={'/'} onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
            </li>

            {/* Shop */}
            <li>
                <Link to={'/allproduct'} onClick={() => setIsMobileMenuOpen(false)}>OUR STORE</Link>
            </li>
 
             {/* Know Your Soil */}
            <li>
                <Link to={'/knowyoursoil'} onClick={() => setIsMobileMenuOpen(false)}>KNOW YOUR SOIL</Link>
            </li>

             {/* Agri Tours */}
             <li>
                <Link to={'/allproduct'} onClick={() => setIsMobileMenuOpen(false)}>AGRI TOURS</Link>
            </li>

             {/* Farm Story */}
             <li>
                <Link to={'/farmstory'} onClick={() => setIsMobileMenuOpen(false)}>FARM STORY</Link>
            </li>
            <li>

                 {/* Search Bar  */}
                 <SearchBar />
            </li>

            {/* Cart */}
            <li className="text-white">
                <Link to={'/cart'} onClick={() => setIsMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faShoppingBag} className="h-6 w-6 text-white" />
                    ({cartItems.length})
                </Link>
            </li>
   
          <li>
            {/*User Icon*/}
          <div className="relative">
            <button 
              className="text-white hover:text-gray-300 transition duration-300 focus:outline-none" 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <FontAwesomeIcon icon={faCircleUser} className="h-6 w-6" />
            </button>
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 text-white rounded-lg shadow-lg mt-2 py-2 w-48 z-50">
                {!parsedUser && (
                  <>
                    <li className="hover:bg-gray-200 transition duration-200">
                      <Link to={'/signup'} className="block px-4 py-2" onClick={() => setIsProfileDropdownOpen(false)}>Signup</Link>
                    </li>
                    <li className="hover:bg-gray-200 transition duration-200">
                      <Link to={'/login'} className="block px-4 py-2" onClick={() => setIsProfileDropdownOpen(false)}>Login</Link>
                    </li>
                  </>
                )}
                {parsedUser && (
                  <>
                    {parsedUser.role.toLowerCase() === "user" && (
                      <li className="hover:bg-gray-200 transition duration-200">
                        <Link to={'/user-dashboard'} className="block px-4 py-2" onClick={() => setIsProfileDropdownOpen(false)}>User</Link>
                      </li>
                    )}
                    <li className="cursor-pointer hover:bg-gray-200 transition duration-200 block px-4 py-2" onClick={logout}>
                      Logout
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
         
          </li>
        </ul>
    )
    return (
        <nav className=" 500 top-0 bg-gray-900 bg-opacity-80 bg-clip-padding shadow-sm">
           
            <div className="lg:flex lg:space-x-7 lg:justify-center items-center py-3 lg:px-3 text-white">
              
                <div className=" flex space-x-7 justify-center py-3 lg:py-0">
            
                    <Link to={'/'}>
                    <img src="/kmbglogo.png" alt="Krishi Mitra" className="h-12 w-13 lg:h-13 ml-1 lg:ml-0" />
                    </Link>
                    <h2 className=" font-bold text-white text-2xl text-center">  Krishi Mitra</h2>
               
                    {navList}
                </div>

            </div>

      {isProfileDropdownOpen && (
        <div className="lg:hidden text-white-300 px-4 pb-4">
          <ul className="flex flex-col space-y-4 items-center text-white">
            {!parsedUser && (
              <>
                <li className="hover:text-gray-300 transition duration-300">
                  <Link to={'/signup'} onClick={() => setIsProfileDropdownOpen(false)}>Signup</Link>
                </li>
                <li className="hover:text-gray-300 transition duration-300">
                  <Link to={'/login'} onClick={() => setIsProfileDropdownOpen(false)}>Login</Link>
                </li>
              </>
            )}
            {parsedUser && (
              <>
                {parsedUser.role.toLowerCase() === "user" && (
                  <li className="hover:text-gray-300 transition duration-300">
                    <Link to={'/user-dashboard'} onClick={() => setIsProfileDropdownOpen(false)}>User</Link>
                  </li>
                )}
                <li className="cursor-pointer hover:text-gray-300 transition duration-300" onClick={logout}>
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      )}
        </nav>
    );
}

export default Navbar;
