<template>
  <div>
    <span>Vue3의 CompositionAPI</span>
    <button @click="increment">Counter: {{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    /**
     * 같은 관심사(counter)의 코드가 그룹화 되어있음 -> Composable 함수의 형태라고 부름
     * 재사용성이 높아짐 -> 코드 분석, 유지보수, 코드 추출에 용이
     */
    const counter = ref(0)
    const increment = () => counter.value++

    onMounted(() => {
      console.log('CompositionAPI 컴포넌트가 마운트 되었음')
    })

    return { counter, increment }
  }
}
</script>

<style scoped></style>
