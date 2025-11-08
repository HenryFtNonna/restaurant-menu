import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily:{
        header: ['Limelight'],
        footer: ['Poppins']
      },
    }
  },

  plugins: [vue(), tailwindcss()],
  
})
