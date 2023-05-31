<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log('현재 경로: ', route.path);

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
