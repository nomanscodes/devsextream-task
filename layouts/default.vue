<template>
  <div>
    <Html>
      <Head>
        <Title>DevsStream Task</Title>
      </Head>
      <Body>
        <div class="side-nav-outer-toolbar">
          <AppHeader />
          <DxDrawer
            class="layout-body"
            position="before"
            template="menuTemplate"
            v-model:opened="menuOpened"
            :opened-state-mode="drawerOptions.menuMode"
            :reveal-mode="drawerOptions.menuRevealMode"
            :min-size="drawerOptions.minMenuSize"
            :max-size="drawerOptions.maxMenuSize"
            :shading="drawerOptions.shaderEnabled"
          >
            <div class="devs-layout-box">
              <slot />
            </div>
            <template #menuTemplate>
              <LeftNavigationMenu />
            </template>
          </DxDrawer>
          <AppFooter />
        </div>
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
import LeftNavigationMenu from "~/components/LeftNavigationMenu.vue";
import { DxDrawer } from "devextreme-vue";

const isLarge = window.innerWidth > 768;
const isXSmall = window.innerWidth < 768;

const menuOpened = ref(isLarge);

const drawerOptions = computed(() => {
  const shaderEnabled = !isLarge;

  return {
    menuMode: isLarge ? "shrink" : "overlap",
    menuRevealMode: isXSmall ? "slide" : "expand",
    minMenuSize: isXSmall ? 0 : 48,
    maxMenuSize: isXSmall ? 250 : undefined,
    closeOnOutsideClick: shaderEnabled,
    shaderEnabled,
  };
});
</script>

<style lang="scss">
.side-nav-outer-toolbar {
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
}

.layout-body {
  flex: 1;
  margin-top: 4rem;
  padding-bottom: 4rem;
}

.devs-layout-box {
  box-sizing: border-box;
  border: 1rem solid white;
  padding: 1.5rem;
}
</style>
