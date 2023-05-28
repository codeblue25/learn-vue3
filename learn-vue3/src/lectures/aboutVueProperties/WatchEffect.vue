<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ reverseMsg }}</p>
    <hr />

    <form class="inputForm" @submit.prevent="save(title, contents)">
      <input type="text" v-model.lazy="title" placeholder="제목을 입력해주세요 " />
      <textarea v-model.lazy="contents" placeholder="내용을 입력해주세요 "></textarea>
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watch, reactive, watchEffect } from 'vue'

export default {
  setup() {
    const message = ref('')
    watch(message, (newValue, oldValue) => {
      console.log('newValue: ', newValue)
      console.log('oldValue: ', oldValue)
    })

    const x = ref(0)
    const y = ref(0)
    watch(
      () => x.value + y.value,
      (sum, oldValue) => {
        console.log('sum: ', sum)
        console.log('oldValue: ', oldValue)
      }
    )

    // getter 함수
    const obj = reactive({
      count: 0
    })
    watch(
      () => obj.count,
      (newValue, oldValue) => {
        console.log('newValue: ', newValue)
        console.log('oldValue: ', oldValue)
      }
    )

    // deep option
    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0
      }
    })
    watch(person, (newValue) => {
      console.log('newValue: ', newValue)
    })
    watch(
      () => person.obj,
      (newValue) => {
        console.log(newValue)
      }
    )

    // immediate option
    const msg = ref('hello world')
    const reverseMsg = ref('')
    watch(
      msg,
      (newValue) => {
        reverseMsg.value = newValue.split('').reverse().join('')
      },
      {
        immediate: true
      }
    )

    // watchEffect: 기본값이 즉시실행
    const title = ref('')
    const contents = ref('')
    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`)
    }
    watchEffect(() => {
      console.log('watchEffect')
      save(title.value, contents.value)
      //   console.log(title.value)
      //   console.log(contents.value)
    })

    return { message, x, y, obj, person, msg, reverseMsg, title, contents, save }
  }
}
</script>

<style scoped>
.inputForm {
  display: flex;
  flex-direction: column;
}
.inputForm > input {
  margin-bottom: 12px;
}
</style>
