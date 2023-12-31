import { createRouter, createWebHistory } from "vue-router";
import StartingPage from "../pages/StartingPage.vue";
import PersonalInfo from "../pages/PersonalInfo.vue";
import CovidQuestions from "../pages/CovidQuestions.vue";
import Vaccinate from "../pages/Vaccinate.vue";
import CovidPolicy from "../pages/CovidPolicy.vue";
import ThankYou from "../pages/ThankYou.vue";
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
    {
      path: "/covid-questions",
      name: "CovidQuestions",
      component: CovidQuestions,
    },
    {
      path: "/vaccinate",
      name: "Vaccinate",
      component: Vaccinate,
    },
    {
      path: "/covid-policy",
      name: "CovidPolicy",
      component: CovidPolicy,
    },
    {
      path: "/thank-you",
      name: "ThankYou",
      component: ThankYou,
    },
  ],
});

export default router;
