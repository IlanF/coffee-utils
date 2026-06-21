import Alpine from 'alpinejs'

Alpine.data('grindTime', () => ({
    currentTime: 10,
    actualWeight: 16.7,
    desiredWeight: 18,
    roundStep: 0.1,

    roundToStep(value, step) {
        return Math.round(value / step) * step
    },

    get correctedTime() {
        if (!this.currentTime || !this.actualWeight || !this.desiredWeight) {
            return 0
        }

        const value = this.currentTime * this.desiredWeight / this.actualWeight
        return this.roundToStep(value, this.roundStep)
    },
}));
