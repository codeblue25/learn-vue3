import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    component: PostListView,
  },
  {
    path: '/posts/create',
    component: PostCreateView,
  },
  {
    path: '/posts/:postId',
    component: PostDetailView,
  },
  {
    path: '/posts/:postId/edit',
    component: PostEditView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

export default router;
