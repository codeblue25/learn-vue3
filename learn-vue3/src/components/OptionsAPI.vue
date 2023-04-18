<template>
  <div>
    <span>Vue2의 OptionsAPI</span>
    <button @click="increaseCounter">Counter: {{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    console.log('OptionsAPI 컴포넌트가 마운트 되었음')
  },
  methods: {
    increaseCounter() {
      this.counter++
    }
  }
}
</script>

<style scoped></style>
