<template>
  <p>CompositionTest</p>
  <p>{{ name }}</p>
  <p>{{ nameRef }}</p>
  <p>{{ book.title }}</p>
  <p>{{ book.author[0] }}</p>
</template>

<script setup>
import { ref, reactive } from "vue";
const nameRef = ref("あああ");
const book = reactive({
  title: "タイトル",
  author: ["大谷"],
});
const name = "佐藤";
</script>

<style></style>
