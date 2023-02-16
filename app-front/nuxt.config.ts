import federation from '@originjs/vite-plugin-federation';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        plugins: [
            federation({
                name: 'host-app',
                remotes:{
                    navbar: 'http://localhost:5001/assets/remoteEntry.js',
                },
                // shared: ['vue']
            })
        ],
        optimizeDeps: {
            include: ['vue']
        }
    }
});
