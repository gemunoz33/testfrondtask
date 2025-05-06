import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '@/views/users/Users.vue'
import ProjectsView from '@/views/projects/Projects.vue'
import TasksView from '@/views/tasks/Tasks.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'Usuarios',
      component: UsersView,
    },
    {
      path: '/projects',
      name: 'Proyectos',
      component: ProjectsView,
    },
    {
      path: '/tasks',
      name: 'Tareas',
      component: TasksView,
    },
  ],
})

export default router
