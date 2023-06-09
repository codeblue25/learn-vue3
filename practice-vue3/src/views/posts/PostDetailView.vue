<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.contents }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
    <!-- <p>params: {{ $route.params }}</p>
    <p>query: {{ $route.query }}</p>
    <p>hash: {{ $route.hash }}</p> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';

const props = defineProps({
  postId: String,
});

const router = useRouter();

const goListPage = () => {
  router.push({ name: 'PostList' });
};

const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { postId: props.postId } });
};

/**
 * ref
 * 장) 객체 할당 가능
 * 장) 일관성 유지 가능
 * 단) form.value.title, form.value.contents
 *
 * reactive
 * 장) form.title, form.contents
 * 단) 객체 할당 불가능
 * 단) 일관성 유지 불가능
 */
const form = ref({});
const fetchPost = () => {
  const data = getPostById(props.postId);
  form.value = { ...data };
};
fetchPost();
</script>

<style lang="scss" scoped></style>
