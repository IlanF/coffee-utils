export default function() {
    return {
        type: this.$persist('dose').as('ratio.type'),
        dose: this.$persist(18).as('ratio.dose'),
        ratio: this.$persist(2).as('ratio.ratio'),
        output: this.$persist(36).as('ratio.output'),

        get targetOutput() {
            if (!this.dose || !this.ratio) {
                return 0
            }

            if (this.type === 'yield') {
                return this.output / this.ratio
            }

            return this.dose * this.ratio
        }
    }
};
