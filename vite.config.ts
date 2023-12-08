import { UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig((): UserConfig => {
    return {
        plugins: [react()]
    }
})
