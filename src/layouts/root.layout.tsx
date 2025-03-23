import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import { FC, useEffect } from "react"
import AppLogo from "../assets/logo.jpg"
import { Outlet, useLocation } from "react-router"
import { Button } from "@heroui/button"
import { WhatsappIcon } from "../assets/whatsapp-icon"
import { Footer } from "../components/Footer"
import { useNavigate } from "react-router"

const navItems: { nav: string, path: string }[] = [
    { nav: "home", path: "/" },
    { nav: "products", path: "/products" },
    { nav: "about", path: "/about" },
    { nav: "projects", path: "/ourProjects" },
]

export const RootLayout: FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()

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
                    base: ["h-16", "bg-white", "text-black", "border-b"],
                }}
            >
                <NavbarBrand className="cursor-pointer">
                    <img src={AppLogo} alt="" onClick={() => navigate('/')} className="md:max-h-16 max-h-10" />
                    <h1 className="md:text-[27px] text-base font-semibold" onClick={() => navigate('/')}><span className="text-app-accent">Green</span>land paving</h1>
                </NavbarBrand>
                <NavbarContent className="text-sm gap-6 hidden sm:flex" justify="end" >
                    {navItems.map(item => (
                        <NavbarMenuItem key={item.path} onClick={() => navigate(item.path)} className={`cursor-pointer text-base decoration-app-accent underline-offset-4 ${pathname === item.path ? "underline text-app-accent" : ""}`}>
                            {item.nav}
                        </NavbarMenuItem>
                    ))}
                    <Button
                        className="bg-app-accent text-white items-center"
                        startContent={<WhatsappIcon />}
                        size="sm"
                        onPress={() => window.open('https://wa.me/9539524752', '_blank')}
                    >
                        Enquire
                    </Button>
                </NavbarContent>

                <NavbarMenuToggle className="sm:hidden flex" />

                <NavbarMenu className="text-end pb-3">
                    {navItems.map(item => (
                        <NavbarMenuItem key={item.path} onClick={() => navigate(item.path)} className="cursor-pointer">
                            {item.nav}
                        </NavbarMenuItem>
                    ))}
                    <div className="flex-grow content-end">
                        <Button
                            className="bg-app-accent text-white items-center w-full"
                            startContent={<WhatsappIcon />}
                            size="sm"
                            onPress={() => window.open('https://wa.me/9539524752', '_blank')}
                        >
                            Enquire
                        </Button>
                    </div>
                </NavbarMenu>
            </Navbar>

            {/* Content */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    )
}
