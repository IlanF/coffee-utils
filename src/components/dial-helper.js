const recommendations = {
    fast: {
        sour: {
            thin: 'Grind finer.',
            ok: 'Grind finer.',
            heavy: 'Increase yield slightly, then grind finer enough to keep time in range.',
        },
        bitter: {
            thin: 'Likely channeling/uneven. Improve puck prep first; then grind slightly finer only if flow is even.',
            ok: 'Likely channeling. Improve distribution/tamp; don’t chase with yield first.',
            heavy: 'Check dark roast/temp. Improve puck prep; if still bitter, lower temp slightly.',
        },
        weak: {
            thin: 'Grind finer.',
            ok: 'Grind finer or increase dose slightly. Prefer grind first.',
            heavy: 'Likely uneven or stale/flat coffee. Improve puck prep; then grind finer.',
        },
        harsh: {
            thin: 'Likely channeling. Improve puck prep; grind finer only after flow is even.',
            ok: 'Channeling/uneven extraction likely. Improve prep; lower temp if it stays harsh.',
            heavy: 'Could be too intense/dark/uneven. Improve prep; lower temp or increase yield slightly.',
        },
        good: {
            thin: 'Grind a tiny bit finer if you care about matching target time.',
            ok: 'Do nothing.',
            heavy: 'If too intense, increase yield slightly. Otherwise do nothing.',
        },
    },
    ok: {
        sour: {
            thin: 'Increase yield or temperature. If that fails, grind slightly finer.',
            ok: 'Increase yield slightly. Optional: temp up.',
            heavy: 'Increase yield. It is probably strong but under-extracted.',
        },
        bitter: {
            thin: 'Reduce yield or lower temp. Thin + bitter may also mean uneven extraction.',
            ok: 'Reduce yield slightly or lower temp.',
            heavy: 'Grind slightly coarser while keeping same yield, or lower temp.',
        },
        weak: {
            thin: 'Reduce yield or increase dose.',
            ok: 'Reduce yield or increase dose.',
            heavy: 'Muddy but low intensity: try slightly coarser. Could also be stale coffee.',
        },
        harsh: {
            thin: 'Improve puck prep. If flow is even, lower temp or reduce yield.',
            ok: 'Lower temp or reduce yield slightly.',
            heavy: 'Grind slightly coarser or lower temp.',
        },
        good: {
            thin: 'If you want more body, reduce yield slightly.',
            ok: 'Do nothing.',
            heavy: 'If too intense, increase yield slightly. Otherwise leave it.',
        },
    },
    slow: {
        sour: {
            thin: 'Choked/uneven extraction. Grind coarser and improve puck prep.',
            ok: 'Likely uneven. Grind coarser; improve prep. Optional: temp up only if flow becomes normal and sour remains.',
            heavy: 'Grind coarser. Consider reducing dose slightly if basket is overloaded.',
        },
        bitter: {
            thin: 'Grind coarser or reduce yield.',
            ok: 'Grind coarser. Optional: lower temp/reduce yield.',
            heavy: 'Grind coarser. Reduce yield or lower temp if still bitter.',
        },
        weak: {
            thin: 'Reduce yield first if output is high. Then grind coarser if time remains slow.',
            ok: 'Reduce yield or increase dose; grind coarser if the shot is choking.',
            heavy: 'Muddy/choked. Grind coarser. Consider reducing dose.',
        },
        harsh: {
            thin: 'Choked/uneven. Grind coarser and improve puck prep.',
            ok: 'Grind coarser. Optional: lower temp.',
            heavy: 'Grind coarser. Lower temp or reduce yield if harsh remains.',
        },
        good: {
            thin: 'If taste is good, do nothing. Optional: reduce yield slightly for more body.',
            ok: 'Do nothing unless the machine is struggling.',
            heavy: 'Grind slightly coarser if you want less heaviness. Otherwise leave it.',
        },
    }
}


export default function() {
    return {
        time: this.$persist('ok').as('dial-helper.time'),
        taste: this.$persist('good').as('dial-helper.taste'),
        body: this.$persist('ok').as('dial-helper.body'),

        get recommendation() {
           return recommendations[this.time][this.taste][this.body] || 'Uh oh. You found an invalid combination of parameters. Grind finer? 😅';
        },
    }
};
