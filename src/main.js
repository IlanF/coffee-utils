import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import { createIcons, icons } from 'lucide';
import './style.css'
import timer from './components/timer'
import ratio from './components/ratio'
import grindTime from './components/grind-time'

window.Alpine = Alpine

Alpine.plugin(persist)

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

Alpine.data('coffeeTimer', timer)
Alpine.data('coffeeRatio', ratio)
Alpine.data('grindTime', grindTime)

Alpine.start()

createIcons({
    icons,
    inTemplates: true,
});
