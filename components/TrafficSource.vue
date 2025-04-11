<template>
  <div class="card">
    <div class="card-header">Traffic Sources</div>
    <DxPieChart
      id="trafficChart"
      :data-source="trafficData"
      type="doughnut"
      palette="Soft Pastel"
    >
      <DxSeries argument-field="source" value-field="value">
        <!-- Show label with source and value -->
        <DxLabel :visible="true" format="largeNumber">
          <DxConnector :visible="true" />
          <template #customizeText="point">
            {{ point.argumentText }}: {{ point.valueText }}
          </template>
        </DxLabel>
      </DxSeries>

      <DxLegend
        horizontal-alignment="center"
        vertical-alignment="bottom"
        item-text-position="right"
      />
      <DxTooltip :enabled="true" format="largeNumber" />
    </DxPieChart>
  </div>
</template>

<script setup lang="ts">
import {
  DxPieChart,
  DxSeries,
  DxExport,
  DxLegend,
  DxTooltip,
  DxLabel,
  DxConnector,
} from "devextreme-vue/pie-chart";

const trafficData = [
  { source: "Organic Search", value: 3600 },
  { source: "Direct", value: 5600 },
  { source: "Social Media", value: 2800 },
  { source: "Referral", value: 1900 },
  { source: "Email", value: 1300 },
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

#trafficChart {
  height: 360px;
}
</style>
