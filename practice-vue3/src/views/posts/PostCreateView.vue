<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:contents="form.contents"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-outline-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/api/posts';

import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();

const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

const form = ref({
  title: null,
  contents: null,
});

const save = () => {
  try {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = `${year}-${month}-${day}`;
    createPost({
      ...form.value,
      createdAt: dateStr,
    });
    goListPage();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
