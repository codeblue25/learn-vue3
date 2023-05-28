<template>
  <div>
    <!-- 단방향 바인딩이기 때문에 자바스크립트 상태에 따라 input 상태는 변하지만, input 상태에 따라 자바스크립트 상태가 변하지는 않는다 -->
    <!-- <h2>one-way input value</h2>
    <form action="">
      <input type="text" :value="inputValue" />
    </form>
    <div>{{ inputValue }}</div>
    <hr /> -->

    <!-- v-model 없이 양방향 바인딩 구현 -->
    <!-- <h2>two-way input value</h2>
    <form>
      <input type="text" :value="inputValue" @input="(e) => (inputValue = e.target.value)" />
    </form>
    <div>{{ inputValue }}</div>
    <hr /> -->

    <!-- v-model -->
    <h2>input, textarea는 value 속성과 input 이벤트 사용</h2>
    <span>input value</span>
    <form>
      <input type="text" v-model="inputValue" />
    </form>
    <div>{{ inputValue }}</div>

    <span>textarea value</span>
    <form>
      <textarea type="text" v-model="textareaValue"></textarea>
    </form>
    <div>{{ textareaValue }}</div>
    <hr />

    <h3>checkbox, radio는 checked 속성과 change 이벤트 사용</h3>
    <span>checkbox value</span>
    <form>
      <label for="checkbox">{{ checkboxValue }}</label>
      <input
        type="checkbox"
        id="checkbox"
        v-model="checkboxValue"
        true-value="Yes"
        false-value="No"
      />
    </form>

    <span>checkbox values</span>
    <label>
      <input type="checkbox" value="서울" v-model="checkboxValues" />
      서울
    </label>
    <label>
      <input type="checkbox" value="부산" v-model="checkboxValues" />
      부산
    </label>
    <label>
      <input type="checkbox" value="제주" v-model="checkboxValues" />
      제주
    </label>
    <div>{{ checkboxValues }}</div>

    <span>radio value</span>
    <form>
      <label for="radio">
        <input type="radio" id="radio" name="mbti" value="ENFP" v-model="radioValue" />
        ENFP
      </label>
      <label for="radio">
        <input type="radio" id="radio" name="mbti" value="ISTP" v-model="radioValue" />
        ISTP
      </label>
      <label for="radio">
        <input type="radio" id="radio" name="mbti" value="INTJ" v-model="radioValue" />
        INTJ
      </label>
      <label for="radio">
        <input type="radio" id="radio" name="mbti" value="ESTJ" v-model="radioValue" />
        ESTJ
      </label>
    </form>
    <div>{{ radioValue }}</div>

    <hr />
    <h3>select는 value 속성과 change 이벤트 사용</h3>
    <span>select value</span>
    <select v-model="selectValue">
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
    </select>
    <div>{{ selectValue }} 수업 입니다.</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputValue = ref(null)
    const textareaValue = ref(null)
    const checkboxValue = ref('Yes')
    const checkboxValues = ref([])
    const radioValue = ref('INTJ')
    const selectValue = ref('JavaScript')

    return { inputValue, textareaValue, checkboxValue, checkboxValues, radioValue, selectValue }
  }
}
</script>

<style lang="scss" scoped></style>
