<template>
  <TickerCard
    title="Avg. Order Value"
    :data="formattedOrderValue"
    :percentage="orderValueChange"
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

const formattedOrderValue = computed(
  () => `$${dashboard.stats.users.value.toLocaleString()}`
);
const orderValueChange = computed(() => dashboard.stats.users.change);
</script>
