<template>
  <div>
    <li v-for="item in items" :key="item.id">{{ item.id }}. {{ item.message }}</li>

    <hr />

    <!-- for문과 if문을 같이 쓰고 싶을 때 -->
    <h3>id가 짝수인 리스트</h3>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.id % 2 === 0">{{ item.id }}. {{ item.message }}</li>
    </template>

    <!-- computed 속성 활용 -->
    <h3>id가 홀수인 리스트</h3>
    <li v-for="item in oddItems" :key="item.id">{{ item.id }}. {{ item.message }}</li>

    <hr />

    <!-- 객체 for문 -->
    <li v-for="(value, key, index) in myObject" :key="index">{{ key }} - {{ value }}</li>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'HTML' },
      { id: 2, message: 'CSS' },
      { id: 3, message: 'JavaScript' },
      { id: 4, message: 'Vue3' }
    ])

    const oddItems = computed(() => items.filter((item) => item.id % 2 === 1))

    const myObject = {
      name: '최선영',
      gender: '여성',
      skill: 'Vue3'
    }

    return { items, oddItems, myObject }
  }
}
</script>

<style lang="scss" scoped></style>
