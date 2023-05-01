<template>
  <div>
    <!-- 조건을 만족하지 않으면 렌더링 자체가 되지 않음 -->
    <!-- 전환 비용이 높음 -->
    <h2 v-if="visible">Is visible ?</h2>
    <h2 v-else>Is not visible ?</h2>
    <button @click="toggleVisible">토글버튼</button>

    <hr />

    <h3 v-if="type === 'A'">A입니다.</h3>
    <h3 v-else-if="type === 'B'">B입니다.</h3>
    <h3 v-else-if="type === 'C'">C입니다.</h3>
    <h3 v-else>A B C가 아닙니다.</h3>
    <button @click="type = 'A'">A</button>
    <button @click="type = 'B'">B</button>
    <button @click="type = 'C'">C</button>
    <button @click="type = 'D'">D</button>

    <hr />

    <!-- 여러 HTML 요소를 v-if 디렉티브로 연결하고 싶을 때 -->
    <template v-if="visible">
      <h2>Title</h2>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <hr />

    <!-- 렌더링은 되었지만 UI적으로만 보이지 않음 -->
    <!-- 초기 렌더링 비용이 높음 -->
    <h2 v-show="show">Is show ?</h2>
    <button @click="toggleShow">토글버튼</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const visible = ref(true)
    const toggleVisible = () => {
      visible.value = !visible.value
    }

    const type = ref('A')

    const show = ref(true)
    const toggleShow = () => {
      show.value = !show.value
    }

    return { visible, toggleVisible, type, show, toggleShow }
  }
}
</script>

<style lang="scss" scoped></style>
