<template>
  <Transition name="alert">
    <div v-if="show" class="alert app-alert" :class="styleClass" role="alert">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'error',
    validator: value => ['success', 'error'].includes(value),
  },
});
const styleClass = computed(() =>
  props.type === 'error' ? 'alert-danger' : 'alert-success',
);
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
