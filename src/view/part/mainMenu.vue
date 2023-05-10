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
  width: 5%;
  padding: 1rem;
  gap: 8px;

  .menu-divider {
    margin: 1rem 0;
    width: 100%;
    height: 1px;
    background-color: rgba(#1c1917, 0.3);
  }

  a {
    text-decoration: none;
    color: #292524;
  }
}
</style>
