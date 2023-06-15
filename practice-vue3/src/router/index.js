import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';

import NotFoundView from '@/views/NotFoundView.vue';

import NestedView from '@/views/nested/NestedView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

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
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:postId',
    name: 'PostDetail',
    component: PostDetailView,
    props: true, // 파라미터(id)가 PostDetailView에 props로 전달됨
  },
  {
    path: '/posts/:postId/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

/**
 * history mode (createWebHistory)
 * 페이지를 다시 로드 하지않고 URl을 탐색할 수 있음
 *
 * hash mode (createWebHashHistory)
 * URL이 변경될 때 페이지가 다시 로드 되지 않음
 * SEO에 취약함
 */
const router = createRouter({
  history: createWebHistory('/'),
  // history: createWebHashHistory('/'),
  routes,
});

export default router;
