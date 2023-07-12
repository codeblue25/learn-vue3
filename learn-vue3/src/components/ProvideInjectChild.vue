<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body">
      <ProvideInjectChildDeep />
    </div>
  </div>
</template>

<script>
import ProvideInjectChildDeep from './ProvideInjectChildDeep.vue'

export default {
  components: {
    ProvideInjectChildDeep
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
