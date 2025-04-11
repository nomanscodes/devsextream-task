<script setup lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxExport,
  DxPaging,
  DxPager,
  DxSearchPanel,
  DxFilterRow,
} from "devextreme-vue/data-grid";

import { onMounted } from "vue";
import { useLeadsStore } from "#imports";

const leadsStore = useLeadsStore();

onMounted(() => {
  leadsStore.fetchLeads();
});
</script>

<template>
  <div class="card">
    <div class="card-header">Recent Leads</div>

    <DxDataGrid
      :data-source="leadsStore.leads"
      :show-borders="false"
      :row-alternation-enabled="true"
      :column-auto-width="true"
      :show-column-lines="false"
      :show-row-lines="false"
      :allow-column-resizing="true"
      :allow-column-reordering="true"
      :loading="leadsStore.loading"
      :paging="{ pageSize: 5 }"
      :pager="{
        visible: true,
        showInfo: true,
        showNavigationButtons: true,
        showPageSizeSelector: true,
        allowedPageSizes: [5, 10, 20],
      }"
    >
      <!-- Search & Filters -->
      <DxSearchPanel :visible="true" :width="250" placeholder="Search..." />
      <DxFilterRow :visible="true" />

      <!-- Columns -->
      <DxColumn data-field="name" caption="Name" />
      <DxColumn data-field="email" caption="Email" />
      <DxColumn
        data-field="date"
        caption="Date"
        data-type="date"
        format="MMM dd, yyyy"
      />
      <DxColumn data-field="amount" caption="Amount" format="currency" />
      <DxColumn data-field="status" caption="Status">
        <template #cell="{ data }">
          <span :class="['badge', data.status.toLowerCase()]">{{
            data.status
          }}</span>
        </template>
      </DxColumn>

      <!-- Export -->
      <DxExport :enabled="true" />
    </DxDataGrid>
  </div>
</template>
<style scoped lang="scss">
.card {
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.05),
    0 0 4px rgba(13, 13, 13, 0.15);
  background-color: #ffffff;
  border: none;
  padding: 1.5rem;
  overflow-x: auto;
}

.card-header {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Status badge styles */
.badge {
  display: inline-block;
  padding: 0.3em 0.6em;
  font-size: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
}

.badge.new {
  background-color: #3b82f6;
}

.badge.contacted {
  background-color: #06b6d4;
}

.badge.converted {
  background-color: #10b981;
}

.badge.pending {
  background-color: #f59e0b;
}
</style>
