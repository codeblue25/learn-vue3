<template>
  <div class="app-alert">
    <TransitionGroup name="alert">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="alert"
        :class="typeStyle(item.type)"
        role="alert"
      >
        {{ item.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 66px;
  right: 10px;
}
.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.alert-enter-active,
.alert-leave-active {
  transition: all 0.5s ease;
}
.alert-enter-to,
.alert-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
