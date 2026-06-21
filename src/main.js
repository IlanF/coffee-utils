import Alpine from 'alpinejs'
import { createIcons, icons } from 'lucide';
import './style.css'

window.Alpine = Alpine

Alpine.data('coffeeTools', () => ({
    roundStep: 0.1,

    roundToStep(value, step) {
        return Math.round(value / step) * step
    },

    format(value, decimals = 1) {
        if (!Number.isFinite(value)) {
            return '0'
        }

        return value.toFixed(decimals)
    }
}))

Alpine.start()

createIcons({
    icons,
    inTemplates: true,
});
