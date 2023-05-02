<template>
  <div>
    <p>{{ message }}</p>

    <!-- String으로 인식 -->
    <p v-text="message"></p>
    <!-- HTML로 인식 -->
    <p v-html="htmlStr"></p>

    <hr />

    <!-- 컴포넌트 또는 엘리멘트가 컴파일 되기 전까지만 살아있는 디렉티브 -->
    <p v-cloak>{{ eventMessage }}</p>

    <hr />

    <!-- 최초 한번만 렌더링 (update 성능 최적화) -->
    <p v-once>{{ message }} !!</p>

    <hr />

    <!-- 반응형 데이터에 변경이 있을때만 하위 모든 데이터 update (update 성능 최적화) -->
    <h3>v-memo directive 없음</h3>
    <div>
      <p>subscribers: {{ subscribers }}명</p>
      <p>views: {{ views }}회</p>
      <p>likes: {{ likes }}개</p>
    </div>
    <h3>v-memo에 반응형 데이터를 하나만 걸었을 때</h3>
    <div v-memo="[likes]">
      <p>subscribers: {{ subscribers }}명</p>
      <p>views: {{ views }}회</p>
      <p>likes: {{ likes }}개</p>
    </div>
    <div>
      <button @click="subscribers++">Subs</button>
      <button @click="views++">Views</button>
      <button @click="likes++">Likes</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('안녕하세요')

    const htmlStr = ref('<strong>안녕못하세요</strong>')

    const eventMessage = ref('테스트입니다')
    setTimeout(() => {
      eventMessage.value = '사랑해 !'
    }, 3000)

    const subscribers = ref(4000)
    const views = ref(400)
    const likes = ref(200)

    return { message, htmlStr, eventMessage, subscribers, views, likes }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
