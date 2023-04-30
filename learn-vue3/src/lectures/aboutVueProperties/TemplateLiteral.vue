<template>
  <h2>보간법 (콧수염문법)</h2>
  <p>{{ message }}</p>
  <h2>일회성 보간법 (v-once)</h2>
  <p v-once>{{ message }}</p>
  <button @click="addition">추가</button>
  <hr />
  <h2>HTML (v-html)</h2>
  <p v-html="rawHtml"></p>
  <hr />
  <h2>속성 바인딩 (v-bind)</h2>
  <div :title="dynamicTitle">마우스를 올려보세요</div>
  <input type="text" value="홍길동" :disabled="isInputDisabled" />
  <input type="text" v-bind="attrs" />
  <!-- 다중 속성 바인딩 -->
  <button @click="toggleShowPassword">비밀번호 보기</button>
  <hr />
  <h2>보간법에 JS</h2>
  {{ message.split('').reverse().join('') }}
  {{ isInputDisabled ? '예' : '아니오' }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let message = ref('안녕하세요')
    const addition = () => {
      message.value += '!'
    }

    const rawHtml = ref('<strong>안녕하세요</strong>')

    const dynamicTitle = ref('짠 !')

    const isInputDisabled = true

    let attrs = ref({
      type: 'password',
      value: '1234',
      disabled: true
    })

    const toggleShowPassword = () => {
      attrs.value.type = 'text'
    }

    return { message, addition, rawHtml, dynamicTitle, isInputDisabled, attrs, toggleShowPassword }
  }
}
</script>

<style lang="scss" scoped></style>
