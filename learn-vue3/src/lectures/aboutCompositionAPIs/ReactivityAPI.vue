<template>
  <div>
    <button @click="increaseCount">click {{ state.count }}</button>
    <button @click="increaseCount">deep click {{ state.deep.count }}</button>
    <hr />
    <p>{{ message }}</p>
    <button @click="addMessage">click</button>
    <hr />
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
    <p>desc: {{ reactiveDesc }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, readonly } from 'vue'

export default {
  setup() {
    /**
     * reactive()
     * Vue2 OptionsAPI의 data에서 리턴한 객체와 비슷
     * 객체나 배열과 같은 reference type을 반응형 객체로 만들어줌
     */
    let state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })
    const increaseCount = () => {
      state.count++
      state.deep.count++
    }

    /**
     * ref()
     * 변이 가능한 객체를 리턴 / 이 객체 안에는 value라는 단 하나의 속성 있음 / reactive.value를 참조한다는 뜻
     * number, string, boolean과 같은 primitive type을 반응형 상태로 만들어줌
     */
    let message = ref('Hello')
    const addMessage = () => {
      message.value += '!'
    }

    /**
     * ref로 선언한 데이터를 reactive 객체의 속성으로 사용할 때: .value 안적어도 됨
     * 반응형은 유지되고 있음
     */
    let reactiveCount = ref(0)
    const reactiveState = reactive({
      reactiveCount
    })
    console.log(reactiveState.reactiveCount)
    reactiveCount.value++
    console.log('반응형 유지: ', reactiveCount.value)
    reactiveCount.value++
    console.log('반응형 유지: ', reactiveCount.value)

    /**
     * ref로 선언한 데이터를 reactive 배열에서 사용할 때: .value 적어야 됨 (unwrapping됨)
     * 반응형은 유지되고 있음
     */
    const reactiveMessage = ref('Bye')
    const reactiveArr = reactive([reactiveMessage])
    console.log(reactiveArr[0].value)
    reactiveMessage.value += 'good'
    console.log('반응형 유지: ', reactiveMessage.value)
    reactiveMessage.value += 'bye'
    console.log('반응형 유지: ', reactiveMessage.value)

    /**
     * 반응형 상태 객체 구조분해 할당하면: 반응성을 잃어버림
     */
    const book = reactive({
      author: 'Choi',
      year: '2023',
      title: 'Vue 3 Guide',
      desc: '할건지말건지',
      price: 'free'
    })
    const { author, title } = book
    console.log(typeof author, typeof title)

    /**
     * toRef(), toRefs()
     * 반응성 상태를 유지하면서 객체 구조분해 할당할 때
     */
    const reactiveBook = reactive({
      reactiveAuthor: 'Choi',
      year: '2023',
      reaciveTitle: 'Vue 3 Guide',
      desc: '할건지말건지',
      price: 'free'
    })
    const { reactiveAuthor, reaciveTitle } = toRefs(reactiveBook)
    const reactiveDesc = toRef(reactiveBook, 'desc')

    /**
     * readonly()
     * 반응형 객체 변경 막을 때
     */
    const original = reactive({
      views: 0
    })
    const copy = readonly(original)
    console.log('추가? ', Boolean(original.views++))
    console.log('추가? ', Boolean(copy.views++))

    return {
      state,
      increaseCount,
      message,
      addMessage,
      author,
      title,
      reactiveAuthor,
      reaciveTitle,
      reactiveDesc
    }
  }
}
</script>

<style lang="scss" scoped></style>
