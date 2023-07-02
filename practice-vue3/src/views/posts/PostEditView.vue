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
    <AppAlert
      :show="showAlert"
      :message="alertMessage"
      :type="alertType"
    ></AppAlert>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
    vAlert(err);
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
    vAlert('수정이 완료되었습니다 !', 'success');
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
    // goDetailPage();
  } catch (err) {
    console.log(err);
  }
};

const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('error');
const vAlert = (message, type) => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = type;
};
</script>

<style lang="scss" scoped></style>
