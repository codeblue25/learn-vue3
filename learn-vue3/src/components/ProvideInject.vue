<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">Provide Inject Component</div>
      <div class="card-body">
        <button @click="count++">click !</button>
        <ProvideInjectChild />
      </div>
    </div>
  </div>
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild.vue'
import { ref, provide, readonly } from 'vue'

export default {
  components: {
    ProvideInjectChild
  },
  setup() {
    const staticMessage = 'this is static message'
    const message = ref('message')
    const count = ref(10)

    // provide로 제공하는 값, 그 값을 수정하는 메소드를 함께 제공
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage
    }

    provide('static-message', staticMessage)
    provide('message', { message: readonly(message), updateMessage })
    provide('count', count)

    return { count }
  }
}
</script>

<style lang="scss" scoped></style>
