import { createRouter, createWebHistory } from "vue-router";
import StartingPage from "../pages/StartingPage.vue";
import PersonalInfo from "../pages/PersonalInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StartingPage,
    },
    {
      path: "/personal-info",
      name: "PersonalInformation",
      component: PersonalInfo,
    },
  ],
});

export default router;
