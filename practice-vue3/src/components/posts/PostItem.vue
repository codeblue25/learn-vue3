<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ contents }}
    </p>
    <p class="text-muted">{{ createdDate }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse" @click.stop="$emit('modal')">
        <button class="btn p-0">
          <i class="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});

defineEmits(['modal']);
const dayjs = inject('dayjs');
const createdDate = computed(() =>
  dayjs(props.createdAt).format('YYYY. MM. DD'),
);
</script>

<style lang="scss" scoped></style>
