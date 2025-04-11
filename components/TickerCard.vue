<template>
  <div class="ticker">
    <div class="left">
      <div class="title">{{ title }}</div>
      <div class="card-data">{{ data }}</div>
      <span>vs previous month</span>
    </div>

    <!-- Show only if percentage exists -->
    <div
      v-if="percentage !== null"
      :class="['percentage', percentage > 0 ? 'positive' : 'negative']"
    >
      <div :class="[`dx-icon-${percentage > 0 ? 'spinup' : 'spindown'}`]" />
      <div class="value">{{ Math.abs(percentage) }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    data?: any | null;
    total?: string | null;
    percentage: number | null;
    tone?: "warning" | "info";
  }>(),
  {
    data: null,
    total: null,
    percentage: null,
    tone: undefined,
  }
);
</script>

<style scoped lang="scss">
.ticker {
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.05),
    0 0 4px rgba(13, 13, 13, 0.15);
  background-color: #ffffff;
  border: none;
  padding: 1rem;
  display: flex !important;
  flex-direction: row !important;
  gap: 1rem;
  align-items: center;
  .positive {
    background-color: white;
    color: green;
  }
  .warning {
    background-color: white;
    color: orange;
  }
  .info {
    background-color: white;
    color: rgb(227, 179, 47);
  }
  .negative {
    background-color: white;
    color: red;
  }
  .icon-wrapper {
    display: flex;
    flex: 0 0 48px;
    height: 48px;
    border-radius: 50%;
    .dx-icon {
      margin: auto;
      font-size: 24px;
    }
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;

    span {
      margin-top: 0.5rem;
    }
  }
  .title {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 200%;
  }
  .card-data {
    display: inline-block;
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }
  .percentage {
    display: flex;
    align-self: flex-start;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    align-items: center;
    padding: 4px 8px 4px 2px;
    .value {
      line-height: 20px;
    }
    .dx-icon-spindown {
      font-size: 20px;
    }
    .dx-icon-spinup {
      font-size: 20px;
    }
  }
}
</style>
