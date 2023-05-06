<template>
  <div>
    <!-- 이벤트로 객체에 접근 -->
    <button @click="printEventInfo('Hello Vue3', $event)">inline event handler</button>
    <input type="text" @keyup="onKeyupHandler($event)" />
    <hr />

    <!-- 이벤트 버블링을 막는(e.stopPropagation()) 이벤트 수식어 -->
    <h3>stop modifier</h3>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 태그 영역
        <p @click="clickP">
          P 태그 영역
          <span @click.stop="clickSpan"> SPAN 태그 영역 </span>
        </p>
      </div>
    </div>
    <hr />

    <!-- 기본 기능을 막는(e.preventDefault()) 이벤트 수식어 -->
    <h3>prevent modifier</h3>
    <a href="https://naver.com" @click.prevent="clickA">A 태그</a>
    <hr />

    <!-- 이벤트 수식어를 두개 이상 같이 쓸 수 있다 -->
    <h3>두 개의 modifier 사용하기</h3>
    <div class="multipleModifiers">
      <div @click="clickPost">
        게시물 입니다
        <p>
          <a href="https://naver.com" @click.prevent.stop="clickLike">좋아요 입니다</a>
        </p>
      </div>
    </div>
    <hr />

    <!-- 이벤트 캡처링을 위한 이벤트 수식어 -->
    <h3>capture modifier</h3>
    <div id="modifiers">
      <div @click.capture="clickDiv">
        DIV 태그 영역
        <p @click.capture="clickP">
          P 태그 영역
          <span @click="clickSpan"> SPAN 태그 영역 </span>
        </p>
      </div>
    </div>
    <hr />

    <!-- 자기 자신을 호출하는 이벤트 수식어(타깃요소=self) -->
    <h3>self modifier</h3>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 태그 영역
        <p @click.self="clickP">
          P 태그 영역
          <span @click="clickSpan"> SPAN 태그 영역 </span>
        </p>
      </div>
    </div>
    <hr />

    <!-- 이벤트를 한 번만 실행시키는 이벤트 수식어 -->
    <h3>once modifier</h3>
    <button @click.once="clickOnce">only once !</button>
    <hr />

    <!-- 모바일 성능 개선을 위한 이벤트 수식어(보통 touch 이벤트랑 같이 쓰임) -->
    <h3>passive modifier</h3>
    <div @scroll.passive="onScroll"></div>
    <hr />

    <!-- 키 수식어 ! -->
    <h3>key modifier</h3>
    <input type="text" placeholder="오늘 할 일을 입력하세요" @keyup.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todoArray" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log('message: ', message)
      console.log('event.target: ', event.target)
      console.log('event.target.tagName: ', event.target.tagName)
    }

    const onKeyupHandler = (event) => {
      console.log('event.key: ', event.key)
    }

    const clickDiv = () => {
      console.log('click Div !')
    }

    const clickP = () => {
      console.log('click P !')
    }

    const clickSpan = () => {
      console.log('click Span !')
    }

    const clickA = () => {
      alert('click A !')
    }

    const clickPost = () => {
      alert('게시물 클릭 !')
    }

    const clickLike = () => {
      alert('좋아요 ~')
    }

    const clickOnce = () => {
      alert('단 한 번 !')
    }

    const todoArray = reactive([])
    const addTodo = (event) => {
      todoArray.push(event.target.value)
      event.target.value = ''
      event.target.focus()
    }

    return {
      printEventInfo,
      onKeyupHandler,
      clickDiv,
      clickP,
      clickSpan,
      clickA,
      clickPost,
      clickLike,
      clickOnce,
      todoArray,
      addTodo
    }
  }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
  cursor: pointer;
}

#modifiers div {
  background-color: #ccc;
}

#modifiers p {
  background-color: #999;
}

#modifiers span {
  background-color: #666;
  display: block;
}

.multipleModifiers div,
.multipleModifiers p {
  padding: 40px;
}

.multipleModifiers div {
  background-color: #eee;
}

.multipleModifiers p {
  background-color: #ddd;
}
</style>
