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

            return this.dose * this.ratio
        },

        get reverseDose() {
            if (!this.output || !this.ratio) {
                return 0
            }

            return this.output / this.ratio
        },
    }
};
