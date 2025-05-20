"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-3"
          : "bg-gradient-to-r from-bts-purple/10 to-bts-pink/10 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-bts-black group">
            Giovanna
            <span className="text-bts-purple group-hover:animate-pulse transition-all">Melo</span>
            <Heart className="inline-block ml-1 h-4 w-4 text-bts-purple fill-bts-purple animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#portfolio"
              className="text-bts-black hover:text-bts-purple transition-colors font-medium relative group"
            >
              Portfólio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bts-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#sobre"
              className="text-bts-black hover:text-bts-purple transition-colors font-medium relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bts-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contato"
              className="text-bts-black hover:text-bts-purple transition-colors font-medium relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bts-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-bts-black focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#portfolio"
              className="text-bts-black hover:text-bts-purple transition-colors py-3 text-lg font-medium"
              onClick={toggleMenu}
            >
              Portfólio
            </Link>
            <Link
              href="#sobre"
              className="text-bts-black hover:text-bts-purple transition-colors py-3 text-lg font-medium"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="text-bts-black hover:text-bts-purple transition-colors py-3 text-lg font-medium"
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
