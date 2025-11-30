"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // 👈 get active route

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services_page", label: "Services" },
    { href: "/specialities", label: "Specialities" },
    { href: "/#locations", label: "Locations" },
    { href: "/#testimonials", label: "Patient Testimonials" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <section className="bg-white h-16 border-b w-full px-4 sm:px-5 border-b-black/10 sticky top-0 z-600">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <h2 className="text-xl sm:text-2xl lg:text-3xl ">Akshit Anand</h2>
            <h5 className="text-xs sm:text-sm lg:text-base highlight-text sm:block">
              Speech Language Pathologist | Swallowing Specialist | Audiologist
            </h5>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center gap-6 text-lg subtext">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative cursor-pointer transition whitespace-nowrap pb-1
                  ${isActive ? "text-black " : "text-gray-700 hover:text-black"}
                  
                  before:absolute before:-bottom-0 before:left-0 before:h-0.5 
                  before:transition-all before:duration-300 
                  ${
                    isActive
                      ? "before:w-full before:bg-blue-900"
                      : "before:w-0 hover:before:w-full before:bg-blue-900"
                  }
                `}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </section>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-800 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div className="flex flex-col leading-tight">
            <h2 className="text-xl ">Akshit Anand</h2>
            <h5 className="text-xs highlight-text mt-1">
              Speech Language Pathologist | Swallowing Specialist | Audiologist
            </h5>
          </div>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-5">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeSidebar}
                    className={`block px-4 py-3 text-base rounded-lg transition duration-200 relative
                    ${
                      isActive
                        ? "text-black  bg-blue-50"
                        : "text-gray-700 hover:bg-blue-50"
                    }
                    `}
                  >
                    {link.label}

                    {/* Left blue bar active indicator */}
                    <span
                      className={`absolute left-0 top-0 h-full w-1 transition-all 
                      ${isActive ? "bg-blue-900" : "bg-transparent"}
                    `}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-600 text-center">
            © 2025 Akshit Anand. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
