<template>
  <header>
    <dx-toolbar class="header-toolbar">
      <dx-item location="before">
        <template #default>
          <dx-button icon="menu" styling-mode="outlined" />
        </template>
      </dx-item>

      <dx-item location="center">
        <p style="margin: 0">DevsStream Task</p>
      </dx-item>

      <dx-item
        location="after"
        locate-in-menu="auto"
        menu-item-template="menuUserItem"
      >
        <template #default>
          <dx-button icon="user" styling-mode="outlined" />
        </template>
      </dx-item>
    </dx-toolbar>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DxButton } from "devextreme-vue/button";
import { DxToolbar, DxItem } from "devextreme-vue/toolbar";
</script>
<style scoped lang="scss">
header {
  position: fixed;
  left: 0;
  right: 0;
  flex: 0 0 auto;
  z-index: 1;
  .header-toolbar {
    padding: 0.7rem 1rem;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 0 4px rgba(0, 0, 0, 0.15);
  }
}
</style>
