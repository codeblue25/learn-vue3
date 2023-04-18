<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button @click="reactiveAddition">Add</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button @click="normalAddition">Add</button>
  </div>
</template>

<script>
import { isRef, ref } from 'vue'

export default {
  setup() {
    const reactiveMessage = ref('Hello Reactive')
    const reactiveAddition = () => {
      reactiveMessage.value += '!'
    }
    console.log('반응형 메시지는 반응형인가요? ', isRef(reactiveMessage))

    let normalMessage = 'Hello Normal'
    const normalAddition = () => {
      normalMessage += '!'
    }
    console.log('일반 메시지는 반응형인가요? ', isRef(normalMessage))

    return { reactiveMessage, reactiveAddition, normalMessage, normalAddition }
  }
}
</script>

<style lang="scss" scoped></style>
