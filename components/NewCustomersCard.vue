<template>
  <TickerCard
    title="New Customers"
    :data="formattedCustomers"
    :percentage="usersChange"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from "vue";
import { useDashboardStore } from "~/stores/useDashboardStore";
import TickerCard from "@/components/TickerCard.vue";

const dashboard = useDashboardStore();

// Start/stop live updates
onMounted(() => {
  dashboard.startLiveUpdates();
});

onBeforeUnmount(() => {
  dashboard.stopLiveUpdates();
});

const formattedCustomers = computed(
  () => `${dashboard.stats.users.value.toLocaleString()}`
);
const usersChange = computed(() => dashboard.stats.users.change);
</script>
