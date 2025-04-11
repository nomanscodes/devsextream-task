<template>
  <div class="devs-navigations">
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <!-- Add more links as needed -->
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.devs-navigations {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 0 1rem;
  height: 100%;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #e5e7eb;

      a {
        text-decoration: none;
        color: #111827;
        font-weight: 500;
        padding: 0.5rem 1rem;
        display: block;
        border-radius: 0.375rem;

        &:hover {
          background-color: #f3f4f6;
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
