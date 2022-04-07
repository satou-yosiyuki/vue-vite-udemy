<template>
  <div class="children">
    <div>Children(子供)</div>
    <GrandChildren />
  </div>
</template>

<script>
import GrandChildren from "@/components/GrandChildren.vue";

export default {
  components: {
    GrandChildren,
  },
};
</script>

<style></style>
