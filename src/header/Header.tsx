"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
        setIsVisible(false);
    }, [pathname]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header py-0 bg-dark fixed top-0 w-full z-50 text-dark md:text-white">
            <header>
                <nav className="container flex items-center justify-between p-2" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-[80px] w-auto max-w-[200px]" src="/images/Logo_main1.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-8 lg:hidden me-4">
                        <Link href="https://book.mylimobiz.com/v4/(S(3hk1vayurwuluomiaun0a0w1))/eliteblackcar" className="button-1">
                            <span className="button-1-shadow"></span>
                            <span className="button-1-edge"></span>
                            <span className="button-1-front text">Book Now</span>
                        </Link>
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="button-1"
                        >
                             <span className="button-1-shadow"></span>
                            <span className="button-1-edge"></span>
                            <span className="button-1-front text">
                            <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </span>
                        </button>
                    </div>

                    <div className="hidden items-center lg:flex lg:gap-x-12">
                        <Link href="/about" className="button-1 mb-2 text-white">About Us</Link>
                        <Link href="/contact" className="button-1 mb-2 text-white">Contact Us</Link>
                        <Link href="https://book.mylimobiz.com/v4/(S(3hk1vayurwuluomiaun0a0w1))/eliteblackcar" className="button-1">
                            <span className="button-1-shadow"></span>
                            <span className="button-1-edge"></span>
                            <span className="button-1-front text">Book Now</span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}

                {/* Mobile Menu with Slide Animation */}
                <div
                    className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm transform transition-transform duration-300 ease-in-out bg-dark px-6 py-6 ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-[60px] w-auto max-w-[250px]" src="/images/Logo_main1.svg" alt="Logo" />
                        </Link>
                        <button type="button" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-white">
                            <span className="sr-only">Close menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="-mx-3">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold hover:bg-gray-50"
                                        aria-controls="disclosure-1"
                                        aria-expanded={isVisible ? "true" : "false"}
                                        onClick={toggleVisibility}
                                    >
                                        Product
                                        <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className={`mt-2 space-y-2 ${isVisible ? "block" : "hidden"}`} id="disclosure-1">
                                        {["Analytics", "Engagement"].map((item) => (
                                            <a
                                                href="#"
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold hover:bg-gray-50"
                                                key={item}
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <Link href="#" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">Home</Link>
                                <Link href="/about" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">About Us</Link>
                                <Link href="/contact" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
