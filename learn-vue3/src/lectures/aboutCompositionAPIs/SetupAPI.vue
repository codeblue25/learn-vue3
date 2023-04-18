<template>
  <div></div>
</template>

<script>
export default {
  props: {
    title: String
  },
  /**
   * setup함수의 첫번째 매개변수는 props
   * setup함수의 두번째 매개변수는 context object
   */
  setup(props, context) {
    console.log(props.title)

    /**
     * attrs: 비반응형 객체
     * slots: 비반응성 개체
     * emit: event emit 함수
     * expose: public 속성과 함수를 외부에 노출
     */
    console.log(context.attrs)
    console.log(context.slots)
    console.log(context.emit)
    console.log(context.expose)

    return {}
  }
}
</script>

<style lang="scss" scoped></style>
