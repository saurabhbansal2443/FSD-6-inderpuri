import React from "react";
import CartIcon from "../icons/CartIcon";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-sky-800 flex items-center justify-between px-10">
      <p className="text-white text-3xl font-bold">Shopsy</p>

      <SearchBar />

      <CartIcon fill="#ffffff" />
    </div>
  );
};

export default Navbar;
