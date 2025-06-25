import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  LogOut,
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  const { logout, user } = useAuthStore();
  const { setContentType } = useContentStore();

  return (
    <header className="flex py-4 px-12 justify-between items-center w-full z-100 to-[#330022] fixed text-[#FFD700]">
      <div
        className={`-z-50 bg-gradient-to-b from-[#1a0011] via-[#1a0011] to-[#330022] ${
          scrolled ? "opacity-100" : "opacity-0"
        } transition-opacity duration-350 ease-in absolute w-full h-full top-0 left-0`}
      />
      <div className="text-2xl hover:cursor-pointer">
        <Link to="/">TrailerZone</Link>
      </div>
      <nav className="mr-12 flex items-center justify-between">
        <ul className="hidden mr-12 md:flex justify-between gap-4">
          <li className="hover:cursor-pointer hover:text-[#FF8C00]">
            <Link to="/genre">Search By Genre</Link>
          </li>
          <li
            onClick={() => {
              setContentType("movie");
            }}
            className="hover:cursor-pointer hover:text-[#FF8C00]"
          >
            <Link to="/"> Movies</Link>
          </li>
          <li
            onClick={() => {
              setContentType("series");
            }}
            className="hover:cursor-pointer hover:text-[#FF8C00]"
          >
            <Link to="/"> TV Series</Link>
          </li>

          <li className="hover:cursor-pointer hover:text-[#FF8C00]">
            <Link to="/history"> Search History</Link>
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
          <div className="fixed bg-[#1a0011] top-0 left-0 w-screen h-screen z-50 flex flex-col justify-between">
            <ul className="flex flex-col  ">
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className="hover:cursor-pointer py-4 px-4 text-3xl border-b border-[#330022] hover:bg-[#330022] transition-colors duration-150
"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setContentType("movie");
                  setMenu(false);
                }}
                className="hover:cursor-pointer py-4 px-4 text-3xl"
              >
                <Link to="/">Movies</Link>
              </li>
              <li
                onClick={() => {
                  setContentType("series");
                  setMenu(false);
                }}
                className="hover:cursor-pointer py-4 px-4 text-3xl"
              >
                <Link to="/">TV Series</Link>
              </li>
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className="hover:cursor-pointer py-4 px-4 text-3xl"
              >
                <Link to="/history">Search History</Link>
              </li>
              <li
                onClick={async () => {
                  await logout();
                  setMenu(false);
                }}
                className="hover:cursor-pointer py-4 px-4 text-3xl"
              >
                <Link to="/auth">Log out</Link>
              </li>
            </ul>
            <div className="flex justify-center gap-6 py-8 px-8 ">
              <a
                href="https://zoranspasenovic.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8C00] transition-colors"
              >
                <Globe size={40} />
              </a>
              <a
                href="https://github.com/ZoranSpasenovic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8C00] transition-colors"
              >
                <Github size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/zoran-spasenovic-4b0428271/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8C00] transition-colors"
              >
                <Linkedin size={40} />
              </a>
              <a
                href="mailto:spalespasenovic@gmail.com"
                className="hover:text-[#FF8C00] transition-colors"
              >
                <Mail size={40} />
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="flex gap-4 items-center">
        <Link to="/search">
          <Search className="size-6 cursor-pointer" />
        </Link>
        {user && <img src={user?.image} alt="Avatar" className="h-8 rounded" />}
        <div>
          <LogOut
            onClick={async () => {
              await logout();
            }}
            className="w-6 h-6 block  cursor-pointer"
          />
        </div>

        <button
          className="md:hidden w-6 h-6 block hover:cursor-pointer"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
