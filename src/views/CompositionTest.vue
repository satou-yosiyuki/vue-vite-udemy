<template>
  <p>CompositionTest</p>
  <p>{{ name }}</p>
  <p>{{ nameRef }}</p>
  <p>{{ book.title }}</p>
  <p>{{ book.author[0] }}</p>
  <p>{{ totalPrice }}</p>
  <div><input v-model="search" /></div>
  <div><input v-model="searchEffect" /></div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue";
const nameRef = ref("あああ");
const book = reactive({
  title: "タイトル",
  author: ["大谷2", "伊藤2"],
});

const item = reactive({
  price: 100,
  number: 1,
});

const totalPrice = computed(() => {
  return item.price * item.price;
});

const search = ref("");
watch(search, (newValue, prevValue) => {
  console.log(`watch: ${search.value}`);
  console.log(`new: ${newValue}`);
  console.log(`prev: ${prevValue}`);
});
const searchEffect = ref("");
watchEffect(() => {
  console.log(`watchEffect: ${searchEffect.value}`);
});

onMounted(() => {
  console.log("onMounted");
});

const name = "佐藤";
</script>

<style></style>
