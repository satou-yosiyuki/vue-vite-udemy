<template>
  <div>PropsEmitTest</div>
  <p>{{ setupBooks }}</p>
  <p>{{ dataBooks }}</p>
  <button @click="emitTest">Emitテスト</button>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },
  setup(props, context) {
    console.log(props.setupBooks[0].title);
    const emitTest = () => {
      context.emit("custom-event", "この値");
    };
    return {
      emitTest,
    };
  },
};
</script>

<style></style>
