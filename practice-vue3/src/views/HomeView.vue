<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>

  <hr class="my-4" />
  <h2>{{ $person.name }}</h2>
  <button class="btn btn-primary" @click="person.say">click person</button>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name)
    // this.$person.say()
  },
};
</script>

<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log('현재 경로: ', route.path);

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const person = inject('person');
console.log('provide and inject: ', person.name);
</script>

<style lang="scss" scoped></style>
