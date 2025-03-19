import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import { FC, useEffect } from "react"
import AppLogo from "../assets/logo.jpg"
import { Outlet, useLocation } from "react-router"
import { Button } from "@heroui/button"
import { WhatsappIcon } from "../assets/whatsapp-icon"
import { Footer } from "../components/Footer"

const navItems: { nav: string }[] = [
    { nav: "home" },
    { nav: "products" },
    { nav: "about us" },
]

export const RootLayout: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [pathname]);

    return (
        <div className="">

            {/* Header */}
            <Navbar
                isBlurred={false}
                position="sticky"
                shouldHideOnScroll
                disableScrollHandler
                classNames={{
                    base: ["h-16", "bg-white", "text-black","border-b"],
                }}
            >
                <NavbarBrand className="">
                    <img src={AppLogo} alt="" className="md:max-h-16 max-h-10" />
                    <h1 className="md:text-2xl text-base font-medium">Greenland paving</h1>
                </NavbarBrand>
                <NavbarContent className="text-sm hidden sm:flex" justify="end" >
                    {
                        navItems.map(item => <NavbarItem key={item.nav}>{item.nav}</NavbarItem>)
                    }
                    <Button
                        className="bg-app-accent text-white items-center"
                        startContent={<WhatsappIcon />}
                        size="sm"
                    >
                        Enquire
                    </Button>
                </NavbarContent>

                <NavbarMenuToggle className="sm:hidden flex" />

                <NavbarMenu className="text-end ">
                    {
                        navItems.map(item => <NavbarMenuItem key={item.nav}>{item.nav}</NavbarMenuItem>)
                    }
                </NavbarMenu>
            </Navbar>

            {/* Content */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    )
}
