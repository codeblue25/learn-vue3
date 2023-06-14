<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost"></PostCreate>
      <hr class="my-4" />
      <div class="row g-3">
        <div class="col col-4">
          <AppCard title="제목1" contents="내용1"></AppCard>
        </div>
        <div class="col col-4">
          <AppCard :title="post.title" :contents="post.contents"></AppCard>
        </div>
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :is-like="post.isLike"
            @toggle-like="post.isLike = !post.isLike"
          ></AppCard>
        </div>
      </div>

      <hr class="my-4" />

      <LabelInput
        v-model="username"
        label="이름"
        class="parent-classa"
        style="color: red"
        id="parent-id"
      ></LabelInput>
    </div>
  </main>
</template>

<script>
import AppCard from '@/components/AppCard.vue'
import PostCreate from '@/components/PostCreate.vue'
import LabelInput from '@/components/LabelInput.vue'
import { reactive, ref } from 'vue'
export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput
  },
  setup() {
    const post = reactive({
      title: '제목2',
      contents: '내용2'
    })

    const posts = reactive([
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'notice' },
      { id: 4, title: '제목4', contents: '내용4' },
      { id: 5, title: '제목5', contents: '내용5' },
      { id: 6, title: '제목6', contents: '내용6' }
    ])
    const createPost = (newPost) => {
      console.log('newPost: ', newPost)
      posts.push(newPost)
    }

    const username = ref('')

    return { post, posts, createPost, username }
  }
}
</script>

<style lang="scss" scoped></style>
