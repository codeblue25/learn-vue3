<template>
  <div :style="styleObj">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem fugiat voluptas quo
    consequatur quaerat nemo, iure recusandae iusto, commodi earum voluptate dolore libero! Sequi
    est quasi maiores? Iste, hic.
  </div>
  <div :style="styleComputedObj">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem fugiat voluptas quo
    consequatur quaerat nemo, iure recusandae iusto, commodi earum voluptate dolore libero! Sequi
    est quasi maiores? Iste, hic.
  </div>
  <button @click="increaseFontSize">+</button>
  <button @click="decreaseFontSize">-</button>
</template>

<script>
import { ref, computed, reactive } from 'vue'

export default {
  setup() {
    const styleObj = reactive({
      fontSize: '13px',
      color: 'blue'
    })

    const fontSize = ref(13)
    const styleComputedObj = computed(() => {
      return {
        fontSize: fontSize.value + 'px',
        color: 'green'
      }
    })
    const increaseFontSize = () => {
      fontSize.value++
    }
    const decreaseFontSize = () => {
      fontSize.value--
    }

    return { styleObj, fontSize, styleComputedObj, increaseFontSize, decreaseFontSize }
  }
}
</script>

<style lang="scss" scoped></style>
