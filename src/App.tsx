import { HeroUIProvider } from "@heroui/system"
import { RouterProvider } from "react-router/dom"
import { appRouter } from "./router/router"

function App() {

    return (
        <HeroUIProvider>
            <RouterProvider router={appRouter} />
        </HeroUIProvider>
    )
}

export default App
