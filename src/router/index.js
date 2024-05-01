import { createRouter, createWebHistory } from 'vue-router'
import myProjectsView from "../due-diligence/pages/my-projects.vue";
import LogInView from "../iam/pages/log-in.view.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../iam/pages/log-in.view.vue'),
            props: true,
        },
        {
            path: '/:id',
            name: 'workspace',
            component: () => import('../views/workspace.view.vue'),
            props: true,
            children: [
                {
                    path: '/:id/workspace',
                    name: 'due_diligence',
                    component: () => import('../due-diligence/pages/my-projects.vue'),
                    props: true,
                },
                {
                    path: '/:id/workspace/:project_id/:user_type',
                    name: 'due_diligence/project',
                    component: () => import('../due-diligence/pages/project-showcase.vue'),
                    props: true,
                },
                {
                    path: '/:id/qa/:project_id/:user_type',
                    name: 'qa',
                    component: () => import('../qa/pages/qa-showcase.vue'),
                    props: true,
                },
                {
                    path: '/:id/project_creation',
                    name: 'project_creation',
                    component: () => import('../pending-projects/pages/pending-projects.vue'),
                    props: true,
                },
                {
                    path: '/:id/settings',
                    name: 'settings',
                },
                {
                    path: '/:id/settings/:project_id/:user_type',
                    name: 'settings_project',
                },
            ],
        },
        {
            path: '/',
            redirect: 'login'
        },
    ]
})
export default router