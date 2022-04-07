<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <!-- v-model = v-bind + v-on -->
    <div class="wrapper">
      <HelloWorld msg="HelloWorld" />
      <button @click="addCount">count++</button>
      <p>{{ count }}</p>
      <!-- v-modelとv-bindとv-onの違い
      https://qiita.com/JetNel0/items/8aa1de448a16eb0c5e42 -->
      <input type="text" :value="name" />
      <input type="text" :input="inputEvent" />
      <input type="text" v-model="name" />
      <p>{{ name }}</p>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/children">children</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, reactive, provide } from "vue";
// import { defineComponent } from "@vue/composition-api";

// export default {
//   data() {
//     return {};
//   },
//   provide() {
//     return { userName: "親で設定した名前" };
//   },
// };
const count = ref(0);
const addCount = () => {
  count.value++;
};
const name: string = ref("佐藤");
const inputEvent = (e: any) => {
  ref(e.target.value);
  console.log(e.target.value);
};

provide("userName");
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
