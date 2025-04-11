<template>
  <div class="card">
    <div class="card-header">Sales Overview</div>
    <DxChart id="chart" :data-source="dataSource">
      <!-- Sales (Bar) -->
      <DxSeries
        value-field="sales"
        argument-field="month"
        name="Sales"
        type="bar"
        color="#3b82f6"
      />

      <!-- Target (Line) -->
      <DxSeries
        value-field="target"
        argument-field="month"
        name="Target"
        type="line"
        color="#ef4444"
      />

      <DxLegend vertical-alignment="bottom" horizontal-alignment="center" />

      <DxTooltip :enabled="true" />
    </DxChart>
  </div>
</template>

<script setup lang="ts">
import {
  DxChart,
  DxSeries,
  DxExport,
  DxLegend,
  DxTooltip,
} from "devextreme-vue/chart";

const dataSource = [
  { month: "Jan", sales: 3000, target: 3500 },
  { month: "Feb", sales: 4000, target: 4000 },
  { month: "Mar", sales: 4500, target: 4500 },
  { month: "Apr", sales: 5000, target: 5000 },
  { month: "May", sales: 4800, target: 5500 },
  { month: "Jun", sales: 6000, target: 6000 },
];
</script>

<style scoped lang="scss">
.card {
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.05),
    0 0 4px rgba(13, 13, 13, 0.15);
  background-color: #ffffff;
  border: none;
  padding: 1.5rem;
}

.card-header {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

#chart {
  height: 360px !important;
}
</style>
