<template>
  <dx-scroll-view class="view-wrapper-scroll">
    <div class="view-wrapper">
      <div class="card-toolbar">
        <DxButton
          text="Refresh"
          icon="refresh"
          styling-mode="filled"
          type="default"
          @click="dashboardStore.refreshStats"
        />
        <span class="date-text">Apr 1 – Apr 7, 2025</span>
      </div>

      <div class="tiles">
        <SalesCard />
        <NewCustomersCard />
        <ConversionRateCard />
        <AvgOrderValueCard />
      </div>

      <div class="cards">
        <SalesOverview />
        <TrafficSource />
      </div>

      <!-- Recent Orders -->
      <DxBox
        direction="row"
        :align="center"
        :cross-align="start"
        class="orders-container"
      >
        <DxItem :ratio="1">
          <RecentOrdersTable />
        </DxItem>
      </DxBox>
    </div>
  </dx-scroll-view>
</template>

<script setup>
import { DxBox, DxItem } from "devextreme-vue/box";
import { DxButton } from "devextreme-vue/button";
import { useDashboardStore } from "#imports";

const dashboardStore = useDashboardStore();
</script>

<style scoped>
.card-toolbar {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.orders-container {
  margin-top: 20px;
}

.view-wrapper {
  .cards,
  .tiles {
    display: grid;
    width: 100%;
    grid-gap: 20px;
    gap: 20px;
  }

  .tiles {
    margin: 20px 0;
    grid-template-columns: repeat(4, calc(25% - 15px));
  }

  .cards {
    grid-template-columns: repeat(2, calc(50% - 10px));

    .card-wrapper {
      flex: 1 50%;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .view-wrapper {
    .tiles {
      grid-template-columns: repeat(2, calc(50% - 10px));
    }
  }
}

@media only screen and (max-width: 900px) {
  .view-wrapper {
    .cards {
      grid-template-columns: repeat(1, 100%);
    }
  }
}

@media only screen and (max-width: 700px) {
  .view-wrapper {
    .cards,
    .tiles {
      grid-template-columns: repeat(1, 100%);
    }
  }
}

@media only screen and (max-width: 400px) {
  .view-wrapper {
    .cards,
    .tiles {
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>
