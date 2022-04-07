<template>
  <div>GrandChildren(孫)</div>
  <div>{{ "userName" }}</div>
</template>

<script>
import { inject } from "vue";
inject("userName");
</script>

<style></style>
