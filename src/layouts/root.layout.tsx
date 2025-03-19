import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import { FC } from "react"
import NikeLogo from "../assets/nike.svg"
import { Outlet } from "react-router"
import { Button } from "@heroui/button"
import { WhatsappIcon } from "../assets/whatsapp-icon"
import { Footer } from "../components/Footer"
import { useNavigate } from "react-router"

const navItems: { nav: string }[] = [
    { nav: "home" },
    { nav: "products" },
    { nav: "about us" },
]

export const RootLayout: FC = () => {
    const navigate = useNavigate()
    return (
        <div className="">

            {/* Header */}
            <Navbar
                isBlurred={false}
                position="sticky"
                shouldHideOnScroll
                disableScrollHandler
                classNames={{
                    base: ["h-20","bg-primary"],
                }}
            >
                <NavbarBrand className="">
                    <img src={NikeLogo} alt="" className="md:max-h-16 max-h-10" />
                    <h1 className="md:text-2xl text-base font-medium">Greenland paving</h1>
                </NavbarBrand>
                <NavbarContent className="text-sm hidden sm:flex" justify="end" >
                    {
                        navItems.map(item => <NavbarItem key={item.nav}>{item.nav}</NavbarItem>)
                    }
                    
                    <Button
                        className="bg-green-400/50 items-center"
                        startContent={<WhatsappIcon />}
                        size="sm"
                        onClick={() => navigate('/ourProjects')}
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
