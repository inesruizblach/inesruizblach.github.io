import React, { useState, useEffect } from "react";

const sections = ["about", "experience & education", "projects", "skills", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 bg-gray-100 shadow z-50 py-3">
      <ul className="flex justify-center gap-6">
        {sections.map((sec) => (
          <li key={sec}>
            <button
              className={`capitalize px-3 py-1 rounded transition ${
                active === sec ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => handleClick(sec)}
            >
              {sec}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
