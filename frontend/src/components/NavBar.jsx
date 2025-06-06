import { Link } from "react-router-dom";
import { Menu, Search, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/authUser";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const { logout, user } = useAuthStore();

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex py-4 px-12 justify-between items-center w-full z-50  fixed text-[#FFD700]">
      <div className="text-2xl hover:cursor-pointer">
        <Link to="/">TrailerZone</Link>
      </div>
      <nav className="mr-12 flex items-center justify-between">
        <ul className="hidden mr-12 md:flex justify-between gap-4">
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">Movies</li>
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">Series</li>
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">
            Trending Movies
          </li>
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">
            Search History
          </li>
          <li
            onClick={async () => {
              await logout();
            }}
            className="hover:cursor-pointer hover:text-[#FF8C00]"
          >
            Log out
          </li>
        </ul>

        {menu && (
          <ul className="flex flex-col bg-[#220055]/60 w-screen absolute top-14 right-0 z-50">
            <li className="hover:bg-[#6A0DAD]/60 hover:cursor-pointer py-2 px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-[#6A0DAD]/60 hover:cursor-pointer py-2 px-4">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="hover:bg-[#6A0DAD]/60 hover:cursor-pointer py-2 px-4">
              <Link to="/profile">Series</Link>
            </li>
            <li className="hover:bg-[#6A0DAD]/60 hover:cursor-pointer py-2 px-4">
              <Link to="/profile">Account</Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="flex gap-4 items-center">
        <Search className="size-6 cursor-pointer" />
        {user && <img src={user?.image} alt="Avatar" className="h-8 rounded" />}

        <LogOut
          onClick={async () => {
            await logout();
          }}
          className="size-6 cursor-pointer"
        />

        <button
          className="md:hidden w-6 h-6 block hover:cursor-pointer"
          onClick={handleOpenMenu}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
