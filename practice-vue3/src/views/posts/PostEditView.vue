<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:contents="form.contents"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-outline-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

import PostForm from '@/components/posts/PostForm.vue';

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
