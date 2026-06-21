export default function() {
    return {
        currentTime: this.$persist(10).as('grind-time.time'),
        actualWeight: this.$persist(16.7).as('grind-time.actual-weight'),
        desiredWeight: this.$persist(18).as('grind-time.desired-weight'),

        get correctedTime() {
            if (!this.currentTime || !this.actualWeight || !this.desiredWeight) {
                return 0
            }

            const value = this.currentTime * this.desiredWeight / this.actualWeight
            return this.$data.roundToStep(value, this.$data.roundStep)
        },
    }
};
