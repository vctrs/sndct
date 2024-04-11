import { resolve} from 'path'
import { defineConfig} from 'vite'

export default defineConfig({
 build: {
    base: "./sndct",
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
