import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';


export default defineConfig({
    plugins: [
        dtsPlugin({
            outDir     : 'dist',
            entryRoot  : 'src',
            rollupTypes: true,
        }),
    ],
    build  : {
        outDir       : './dist',
        target       : 'esnext',
        emptyOutDir  : true,
        lib          : {
            entry   : './src/index.ts',
            fileName: 'index',
            formats : [ 'es', 'cjs' ],
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
            ],
        },
    },
});