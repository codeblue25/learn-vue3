<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.contents }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
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
import { getPostById, deletePost } from '@/api/posts';

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
 * 단) post.value.title, post.value.contents
 *
 * reactive
 * 장) post.title, post.contents
 * 단) 객체 할당 불가능
 * 단) 일관성 유지 불가능
 */
const post = ref({});
const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.postId);
    setPost(data);
  } catch (err) {
    console.log(err);
  }
};
const setPost = ({ title, contents, createdAt }) => {
  (post.value.title = title),
    (post.value.contents = contents),
    (post.value.createdAt = createdAt);
};
fetchPost();

const remove = async () => {
  try {
    if (!confirm('삭제 하시겠습니까 ? ')) {
      return;
    }
    await deletePost(props.postId);
    goListPage();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
