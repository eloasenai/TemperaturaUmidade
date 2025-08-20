import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //porta do servidor
    host: true, // permite acesso externo
    open: true // abre o navegador automaticamente
}
})
