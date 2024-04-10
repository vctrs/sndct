import { resolve} from 'path'
import { defineConfig} from 'vite'

export default defineConfig({
 build: {
   rollupOptions: 
   {
     input: 
     {
       main: resolve(__dirname, 'index.html'),
      // main2: resolve(__dirname, 'pano1.html'),
       main2: resolve(__dirname, 'pano2.html'),
       main3: resolve(__dirname, 'object1.html'),
     },
   },
 },
})