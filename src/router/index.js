import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from "../views/aboutMe/AboutMeView.vue";
import WorkCalendarView from "../views/workCalendar/WorkCalendarView.vue";
import ReviewsView from "../views/reviews/ReviewsView.vue";
import ObjectsView from "../views/objects/ObjectsView.vue";
import DocumentView from "../views/documents/DocumentView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMeView,
        },
        {
            path: '/documents',
            name: 'documents',
            component: DocumentView,
        },
        {
            path: '/objects',
            name: 'objects',
            component: ObjectsView,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: WorkCalendarView,
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: ReviewsView,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/about-me'
        }
    ],
})
export default router