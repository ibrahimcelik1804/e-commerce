
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";



const Header = () => {
  const context=useContext(BasketContext)
  const totalAmount=context.basket.reduce((total,i)=> total+i.amount,0)
  
  return (
    <header className="d-flex justify-content-between align-items-center p-4 text-light bg-dark sticky-top">
      <Link to={"/"} className="fs-4">
        Context Store
      </Link>
      <Link to={"/sepet"} className="fs-4 text-light">
        <FaShoppingCart />
        <span className="mx-2 fs-6 badge bg-danger"> {totalAmount}</span>
      </Link>
    </header>
  );
};

export default Header;
