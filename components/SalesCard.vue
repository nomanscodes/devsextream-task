<template>
  <TickerCard
    title="Total Sales"
    :data="formattedRevenue"
    :percentage="revenueChange"
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

const formattedRevenue = computed(
  () => `$${dashboard.stats.revenue.value.toLocaleString()}`
);
const revenueChange = computed(() => dashboard.stats.revenue.change);
</script>
