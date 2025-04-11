<template>
  <TickerCard
    title="Conversion Rate"
    :data="formattedConversion"
    :percentage="conversionChange"
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

const formattedConversion = computed(
  () => `${dashboard.stats.users.value.toLocaleString()}%`
);
const conversionChange = computed(() => dashboard.stats.users.change);
</script>
