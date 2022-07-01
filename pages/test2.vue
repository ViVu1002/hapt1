<template>
  <div>
    <h1>Example component</h1>
    <button class="btn btn-default" @click="showAlert">Click to use vue-alert</button>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      this.$fire({
        title: "Title",
        text: "text",
        type: "success",
        timer: 3000
      }).then(r => {
        console.log(r.value);
      });
    }
  }
};
</script>