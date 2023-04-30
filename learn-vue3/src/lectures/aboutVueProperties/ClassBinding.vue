<template>
  <div>
    <h2 :class="{ active: isActive, 'text-danger': isDanger }">텍스트입니다</h2>
    <button @click="toggleFontWeight">토글1</button>
    <button @click="toggleFontColor">토글2</button>

    <h2 :class="classObj">Class object 입니다</h2>

    <h2 :class="computedObj">Computed object입니다</h2>

    <h2 :class="[activeClass, errorClass]">Array object 입니다</h2>

    <h2 :class="[isActive ? 'activeClass' : 'errorClass']">Array object with 삼항연산자 입니다</h2>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const isActive = ref(true)
    const toggleFontWeight = () => {
      isActive.value = !isActive.value
    }

    const isDanger = ref(false)
    const toggleFontColor = () => {
      isDanger.value = !isDanger.value
    }

    const classObj = reactive({
      active: false,
      'text-danger': false
    })

    const computedObj = computed(() => {
      return {
        active: false,
        'text-danger': false
      }
    })

    const activeClass = ref('active')
    const errorClass = ref('danger')

    return {
      isActive,
      toggleFontWeight,
      isDanger,
      toggleFontColor,
      classObj,
      computedObj,
      activeClass,
      errorClass
    }
  }
}
</script>

<style scoped>
.active {
  font-weight: 900;
}
.danger {
  color: red;
}
</style>
