import {createRouter, createMemoryHistory,createWebHistory } from "vue-router";
import homeView from "@/public/pages/home.view.vue";
import Service from "@/public/pages/service.view.vue";
import ContactUs from "@/public/pages/contact-us.view.vue";
import Comments from "@/public/pages/comments.view.vue";
import AboutUs from "@/public/pages/about-us.view.vue";
import Login from "@/public/pages/login.view.vue";
const routes = [
    {path: "/", component: homeView, name: "home"},
    {path: "/about", component: AboutUs, name: "about"},
    {path: "/service", component: Service, name: "service"},
    {path: "/comments", component: Comments, name: "comments"},
    {path: "/contact", component: ContactUs, name: "contact"},
    {path: "/home", component: Login, name: "log-in"},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_ROUTES),
    routes,
});


export default router;