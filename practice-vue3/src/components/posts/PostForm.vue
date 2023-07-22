<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        v-focus
        v-color="'blue'"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label">내용</label>
      <textarea
        :value="contents"
        @input="$emit('update:contents', $event.target.value)"
        class="form-control"
        id="contents"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
// 컴포넌트 내에서 커스텀 디렉티브 생성
// const vFocus = {
//   mounted: el => {
//     el.focus();
//   },
// };

defineProps({
  title: String,
  contents: String,
});
defineEmits(['update:title', 'update:contents']);
</script>

<style></style>
