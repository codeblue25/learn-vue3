<template>
  <div></div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'

export default {
  setup() {
    console.log('setup')
    onBeforeMount(() => {
      console.log('before mount')
    })
    onMounted(() => {
      console.log('mounted')
    })
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
