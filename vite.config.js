import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    plugins: [
        tailwindcss(),
        handlebars({
            partialDirectory: "./src/components",
        }),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'script-defer',

            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'pwa-192x192.png',
                'pwa-512x512.png',
                'pwa-512x512-maskable.png'
            ],

            manifest: {
                name: 'Coffee Tools',
                short_name: 'Coffee',
                description: 'Small offline coffee calculators',
                theme_color: '#f8f5f0',
                background_color: '#f8f5f0',
                display: 'standalone',
                start_url: '/',
                scope: '/',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512-maskable.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
            }
        })
    ]
})
