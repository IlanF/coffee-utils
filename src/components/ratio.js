import Alpine from 'alpinejs'

Alpine.data('coffeeRatio', () => ({
    type: 'dose',
    dose: 18,
    ratio: 2,

    output: 36,

    get targetOutput() {
        if (!this.dose || !this.ratio) {
            return 0
        }

        return this.dose * this.ratio
    },

    get reverseDose() {
        if (!this.output || !this.ratio) {
            return 0
        }

        return this.output / this.ratio
    },
}));
