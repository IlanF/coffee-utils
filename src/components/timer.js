import Alpine from 'alpinejs'

Alpine.data('coffeeTimer', () => ({
    lastTick: null,
    time: 0,
    interval: null,

    start() {
        this.lastTick = Date.now();
        this.interval = setInterval(() => {
            this.time += (Date.now() - this.lastTick)
            this.lastTick = Date.now();
        }, 100);
    },
    stop() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.lastTick = null;
        }
    },
    reset() {
        this.time = 0;
    },
}));
