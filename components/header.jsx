'use client'
import React, { useEffect, useRef, useState } from "react";

import { FiSearch, FiMoon } from "react-icons/fi"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, DropdownMenu, Dropdown, DropdownTrigger, DropdownItem, focusVisibleClasses } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import DarkmodeSwitch from "./DarkmodeSwitch.jsx";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const ref = useRef(null);


    useEffect(() => {
        ref.current.children[0].classList.add('max-w-full');
        ref.current.children[0].classList.remove('max-w-[1024px]');

    }, [])

    return (
        <Navbar
            shouldHideOnScroll={true}
            motionProps={'visible'}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="z-50 shadow-xl rounded-3xl py-2 max-w-full justify-normal"
            ref={ref}
        >


            <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>
                    <Link href="/" className="cursor-pointer">
                        <AcmeLogo />
                        <p className="font-bold text-inherit">ACME</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <Link href="/" className="cursor-pointer text-color2">
                        <AcmeLogo />
                        <p className="font-bold text-inherit">ACME</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="gap-8" justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 text-hover">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 text-hover">
                        Style Guide
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 text-hover">
                        Tags
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 text-hover">
                        Authors
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Dropdown>
                        <NavbarItem className="hidden lg:flex">
                            <DropdownTrigger>
                                <Link href="#" className="text-color2 text-hover">
                                    More ↓
                                </Link>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[200px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem
                                key="autoscaling"
                            // startContent={icons.scale}
                            >
                                Autoscaling
                            </DropdownItem>
                            <DropdownItem
                                key="usage_metrics"
                            // startContent={icons.activity}
                            >
                                Usage Metrics
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                            // startContent={icons.flash}
                            >
                                Production Ready
                            </DropdownItem>
                            <DropdownItem
                                key="99_uptime"
                            // startContent={icons.server}
                            >
                                +99% Uptime
                            </DropdownItem>
                            <DropdownItem
                                key="supreme_support"
                            // startContent={icons.user}
                            >
                                +Supreme Support
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 icon-hover">
                        <FiSearch />
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <DarkmodeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className="text-color2 text-hover">Sign in</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} href="#" variant="solid" className="rounded-full outline-none bg-color1 text-white text-base duration-250">
                        Become Member
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="lg:hidden flex justify-end" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className="mt-16 w-full max-w-full rounded-2xl">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
