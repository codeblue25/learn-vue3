<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <span>강의가 있습니까 ? {{ hasLecture }} {{ existLeture() }}</span>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLeture() }}</p>
    <p>{{ existLeture() }}</p>
    <button @click="counter++">counter: {{ counter }}</button>

    <h2>{{ fullName }}</h2>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'

export default {
  setup() {
    const teacher = reactive({
      name: '선영',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3']
    })

    /**
     * computed 속성 사용
     * 계산된 값이 캐시되기 때문에 성능면에서 적은 비용이 들고 유리하다
     * 따라서 저장된 값을 불러주기 때문에 콘솔에 한번만 찍힌다
     * 반응형 데이터가 변경될때만 새로 실행한다
     */
    const hasLecture = computed(() => {
      console.log('computed')
      return teacher.lectures.length !== 0 ? '있습니다.' : '없습니다.'
    })

    /**
     * method 속성 사용
     * 실행할 때마다 콘솔이 찍히는걸 확인할 수 있다
     */
    const existLeture = () => {
      console.log('method')
      return teacher.lectures.length !== 0 ? '있습니다.' : '없습니다.'
    }

    const counter = ref(0)

    /**
     * computed는 기본적으로 readonly
     * 값을 재할당하려면 getter, setter를 사용하면 된다
     */
    const firstName = ref('홍')
    const lastName = ref('길동')
    // const fullName = computed(() => {
    //   return firstName.value + lastName.value
    // })
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        // console.log('재할당된 이름: ', value)
        ;[firstName.value, lastName.value] = value.split(' ')
      }
    })
    fullName.value = '최 선영'

    return { teacher, hasLecture, existLeture, counter, firstName, lastName, fullName }
  }
}
</script>

<style lang="scss" scoped></style>
