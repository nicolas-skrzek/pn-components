<script setup lang="ts">
  import { ROUTES } from '@/router/routes.const'
</script>
<template>
  <div class="app-menu flex flex-column">
    <router-link :to="{ name: ROUTES.home.name }">
      {{ ROUTES.home.label }}
    </router-link>
    <div class="menu-divider" />
    <router-link :to="{ name: ROUTES.button.name }">
      {{ ROUTES.button.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.calendar.name }">
      {{ ROUTES.calendar.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.card.name }">
      {{ ROUTES.card.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.checkbox.name }">
      {{ ROUTES.checkbox.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.list.name }">
      {{ ROUTES.list.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.menu.name }">
      {{ ROUTES.menu.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.modal.name }">
      {{ ROUTES.modal.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.select.name }">
      {{ ROUTES.select.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.table.name }">
      {{ ROUTES.table.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.textarea.name }">
      {{ ROUTES.textarea.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.textfield.name }">
      {{ ROUTES.textfield.label }}
    </router-link>
    <router-link :to="{ name: ROUTES.tree.name }">
      {{ ROUTES.tree.label }}
    </router-link>
  </div>
</template>

<style lang="scss">
.app-menu {
  width: 11%;
  padding: 1rem;
  gap: 8px;
  background-color: #292524;

  .menu-divider {
    margin: 1rem 0;
    width: 100%;
    height: 1px;
    background-color: rgba(#d6d3d1, 0.3);
  }

  a {
    text-decoration: none;
    color: #d6d3d1;
    letter-spacing: 1px;
    line-height: 2;
    font-size: .85714rem;

    &:hover {
      color: #fafaf9;
    }
  }
}
</style>
