// stores/useDashboardStore.ts
import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        defaultStats: {
            users: { value: 1024, change: 0 },
            revenue: { value: 12000, change: 0 },
            orders: { value: 325, change: 0 },
            growth: { value: 8.4, change: 0 }
        },
        stats: {
            users: { value: 1024, change: 0 },
            revenue: { value: 12000, change: 0 },
            orders: { value: 325, change: 0 },
            growth: { value: 8.4, change: 0 }
        },
        intervalId: null as number | null
    }),

    actions: {
        startLiveUpdates() {
            if (this.intervalId) return;

            this.intervalId = setInterval(() => {
                this.updateStat('users', this.randomDelta(5));
                this.updateStat('revenue', this.randomDelta(500));
                this.updateStat('orders', this.randomDelta(10));
                this.updateStat('growth', parseFloat((Math.random() * 1 - 0.5).toFixed(2)));
            }, 1000);
        },

        stopLiveUpdates() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },

        refreshStats() {
            this.stopLiveUpdates();
            this.stats = JSON.parse(JSON.stringify(this.defaultStats)); // deep clone
            this.startLiveUpdates();
        },

        updateStat(key: keyof typeof this.stats, delta: number) {
            const current = this.stats[key].value;
            const newValue = current + delta;
            const change = ((delta / current) * 100).toFixed(2);
            this.stats[key].value = parseFloat(newValue.toFixed(2));
            this.stats[key].change = parseFloat(change);
        },

        randomDelta(max: number) {
            return Math.floor(Math.random() * max * 2 - max);
        }
    }
});
