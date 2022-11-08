import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { useStateContext } from "../Assets/ContextProvider";
import { FiHome, FiStar } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { MdEventAvailable, MdUnfoldMore } from "react-icons/md";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        icon: <FiHome />,
      },

      {
        name: "Review",
        icon: <FiStar />,
      },
      {
        name: "Business",
        icon: <BsBuilding />,
      },
      {
        name: "Events",
        icon: <MdEventAvailable />,
      },
      {
        name: "More",
        icon: <MdUnfoldMore />,
      },
    ],
  },
];
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize < 768) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-700 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text:white text-slate-900"
            >
              {/* <img style={{width:'50%',borderRadius:4}} src={require('../Assets/bannerlogo.png')}  /> */}

              <p
                className="text-base"
                style={{
                  fontWeight: "bold",
                  color: "#FF5800",
                  border: "2px solid #FF5800",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "justify",
                  borderRadius: 4,
                }}
              >
                One Stop
                <br />
                Zimbabwe
              </p>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prev) => !prev)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <IoClose color={currentColor} />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
