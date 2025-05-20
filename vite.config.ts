import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react(),],
    server:{
        allowedHosts:["amazing-sawfly-right.ngrok-free.app"]
    }
})
