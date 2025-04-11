// stores/useLeadsStore.ts
import { defineStore } from 'pinia';

export interface Lead {
    name: string;
    email: string;
    date: Date;
    amount: number;
    status: 'New' | 'Contacted' | 'Converted' | 'Pending';
}

export const useLeadsStore = defineStore('leads', {
    state: () => ({
        leads: [] as Lead[],
        loading: false,
    }),

    actions: {
        async fetchLeads() {
            this.loading = true;

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            this.leads = [
                {
                    name: 'John Doe',
                    email: 'john@example.com',
                    date: new Date('2025-04-01'),
                    amount: 250,
                    status: 'New',
                },
                {
                    name: 'Sarah Smith',
                    email: 'sarah@example.com',
                    date: new Date('2025-04-03'),
                    amount: 300,
                    status: 'Contacted',
                },
                {
                    name: 'Michael Lee',
                    email: 'michael@example.com',
                    date: new Date('2025-04-04'),
                    amount: 150,
                    status: 'Converted',
                },
                {
                    name: 'Emily Carter',
                    email: 'emily@example.com',
                    date: new Date('2025-04-05'),
                    amount: 450,
                    status: 'Pending',
                },
                {
                    name: 'Alex Murphy',
                    email: 'alex@example.com',
                    date: new Date('2025-04-06'),
                    amount: 500,
                    status: 'Converted',
                },
                {
                    name: 'John Doe',
                    email: 'john@example.com',
                    date: new Date('2025-04-01'),
                    amount: 250,
                    status: 'New',
                },
                {
                    name: 'Sarah Smith',
                    email: 'sarah@example.com',
                    date: new Date('2025-04-03'),
                    amount: 300,
                    status: 'Contacted',
                },


            ];

            this.loading = false;
        },
    },
});
