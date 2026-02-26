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
                isBordered
                disableScrollHandler
                classNames={{
                    base: ["h-[72px]", "bg-white", "text-black"],
                    wrapper:["max-w-none", "md:w-11/12","px-4"]
                }}
            >
                <NavbarBrand className="cursor-pointer">
                    <img src={AppLogo} alt="" onClick={() => navigate('/')} className="md:max-h-16 max-h-10" />
                    <div className="flex flex-col" onClick={() => navigate('/')}>
                        <h1 className="text-xl md:text-[27px] font-bold" ><span className="text-app-accent">Green</span>landpaving</h1>
                        <p className="text-sm md:text-base font-normal pl-[2px] self-end">Choose the best</p>
                    </div>
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
                        onPress={() => window.open('https://wa.me/7012889427', '_blank')}
                    >
                        Enquire
                    </Button>
                </NavbarContent>

                <NavbarMenuToggle className="sm:hidden flex" />

                <NavbarMenu className="text-center pb-3">
                    {navItems.map(item => (
                        <NavbarMenuItem key={item.path} onClick={() => navigate(item.path)} className="cursor-pointer">
                            {item.nav}
                        </NavbarMenuItem>
                    ))}
                    <div className="flex-grow">
                        <Button
                            className="bg-app-accent text-white items-center w-full"
                            startContent={<WhatsappIcon />}
                            size="sm"
                            onPress={() => window.open('https://wa.me/7012889427', '_blank')}
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
