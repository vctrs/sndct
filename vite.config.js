import { resolve} from 'path'
import { defineConfig} from 'vite'

export default defineConfig({
<<<<<<< HEAD
    base: "/sndct/",
=======
 base: "/sndct/",
>>>>>>> a22711287f9f021d7570e70fb5a266f35319d9af
 build: {
    
    minify: false,
    target: 'esnext',
    rollupOptions: 
    {
        input: 
        {
        main: resolve(__dirname, 'index.html'),
        // main2: resolve(__dirname, 'pano1.html'),
        pano2: resolve(__dirname, 'pano2.html'),
        object: resolve(__dirname, 'object1.html'),

        },
        output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
          }
    },
 },
})


//https://vitejs.dev/guide/build.html#multi-page-app
