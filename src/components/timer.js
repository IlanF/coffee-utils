export default function() {
    return {
        lastTick: null,
        time: 0,
        interval: null,
        wakeLock: null,

        init() {
            document.addEventListener("visibilitychange", async () => {
                if (this.wakeLock !== null && document.visibilityState === "visible") {
                    console.log('wakeLock re-acquired');
                    this.wakeLock = await navigator.wakeLock.request("screen");
                }
            });
        },

        start() {
            if('wakeLock' in navigator) {
                console.log('wakeLock supported');
                navigator.wakeLock.request('screen').then(wakeLock => {
                    console.log('wakeLock requested');
                    this.wakeLock = wakeLock;
                });
            }

            this.lastTick = Date.now();
            this.interval = setInterval(() => {
                this.time += (Date.now() - this.lastTick)
                this.lastTick = Date.now();
            }, 100);
        },
        stop() {
            if (this.wakeLock) {
                this.wakeLock.release().then(() => {
                    console.log('wakeLock released');
                    this.wakeLock = null;
                });
            }

            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
                this.lastTick = null;
            }
        },
        reset() {
            this.time = 0;
        },
    }
};
