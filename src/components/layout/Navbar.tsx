"use client";
import Container from "../layout/Container";
import {useState, useEffect} from 'react';
import Image from "next/image";
import DayJS from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

DayJS.extend(utc);
DayJS.extend(timezone);

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("About");
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActiveSection(entry.target.id);
                })
            }, {
                threshold: 0.5,
            }
        );
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    });

    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            setTime(
                DayJS()
                    .tz("Asia/Kolkata")
                    .format("HH:mm")
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        "Home",
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    return (
        <nav className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
            scrolled
                ? "top-4 "
                : "top-0 shadow-xs"
            }`}
        >
            <Container>
                <div className={`h-18 flex items-center justify-between mx-auto px-8 transition-all duration-500 ease-out ${
                        scrolled 
                        ? "w-[90%] rounded-full bg-white/20 backdrop-blur-md border border-black/30 shadow-hg" 
                        : "w-full text"
                    }`}
                >
                    <a className="text-[14px] font-medium tracking-tight flex items-center gap-2 cursor-pointer">
                        <Image src="/image.png" alt="Profile" width={30} height={30} className="rounded-full"/>
                        <div className="open-sans hover:text-shadow-md duration-300 ease-out">
                            Raumay Aggarwal
                        </div>
                        <div>·</div>
                        <span className="montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">
                            AI Engineer
                        </span>
                    </a>
                    {/* <div className="open-sans text-md text-[#73726e] flex gap-6 tracking-tight">
                        <a href="#About" className="hover:text-black transition-colors duration-300">About</a>
                        <a href="#Experience" className="hover:text-black transition-colors duration-300">Experience</a>
                        <a href="#Projects" className="hover:text-black transition-colors duration-300">Projects</a>
                        <a href="#Contact" className="hover:text-black transition-colors duration-300">Contact</a>
                    </div> */}
                    <div className="open-sans text-[14px] text-[#73726e] flex gap-6 tracking-tight">
                        {navItems.map((item) => (
                            <a  key={item}
                                href={`#${item}`}
                                className={`relative pb-1 transition-all duration-300 ${
                                    activeSection === item
                                        ? "text-black"
                                        : "text-[#73726e] hover:text-black"
                                }`}
                            >
                                {item}
                                <span className={`absolute left-0 bottom-0 h-[1px] bg-blue-400/40 transition-all duration-300  ${
                                        activeSection === item
                                            ? "w-full"
                                            : "w-0"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="montserrat font-bold flex gap-2 text-gray-500 text-[10px] tracking-[0.15rem] items-center cursor-default">
                        <div className="uppercase">Dehradun, India</div>
                        <div className="text-lg">·</div>
                        <div>{time} IST</div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}