<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          v-model="form.contents"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-outline-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const postId = route.params.postId;

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: postId,
  });
};
const form = ref({
  title: null,
  contents: null,
});
const fetchForm = async () => {
  try {
    const { data } = await getPostById(postId);
    setForm(data);
  } catch (err) {
    console.log(err);
  }
};
const setForm = ({ title, contents, createdAt }) => {
  form.value.title = title;
  form.value.contents = contents;
  form.value.createdAt = createdAt;
};
fetchForm();

const edit = async () => {
  try {
    await updatePost(postId, { ...form.value });
    goDetailPage();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
