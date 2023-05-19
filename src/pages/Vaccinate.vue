<template>
  <Form class="h-[100vh]" v-slot="{ values, meta }">
    <form-header :pageNum="3">
      <section class="mt-48 w-[700px]">
        <h2 class="font-bold text-xl mb-4">უკვე აცრილი ხარ?*</h2>
        <radio-input
          value="true"
          label="კი"
          name="vaccinated"
          rules="required"
          v-model="hadVaccine"
        />
        <radio-input
          value="false"
          label="არა"
          name="vaccinated"
          rules="required"
          v-model="hadVaccine"
        />
        <div v-if="values.vaccinated === 'true'" class="mt-10">
          <h2 class="font-bold text-xl mb-4">აირჩიე რა ეტაპზე ხარ*</h2>
          <radio-input
            value="first_dosage_and_registered_on_the_second"
            label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            name="stage"
            rules="required"
            v-model="vaccinationStage"
          />
          <radio-input
            value="fully_vaccinated"
            label="სრულად აცრილი ვარ"
            name="stage"
            rules="required"
            v-model="vaccinationStage"
          />
          <radio-input
            value="first_dosage_and_not_registered_yet"
            label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            name="stage"
            rules="required"
            v-model="vaccinationStage"
          />
          <div
            v-if="values.stage === 'first_dosage_and_not_registered_yet'"
            class="w-80 mt-10"
          >
            <h2 class="ml-12">
              რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
              <a
                class="text-[#1289AE]"
                target="_blank"
                href=" https://booking.moh.gov.ge/"
              >
                https://booking.moh.gov.ge/
              </a>
            </h2>
          </div>
        </div>

        <div v-if="values.vaccinated === 'false'" class="mt-10">
          <h2 class="font-bold text-xl mb-4">რას ელოდები?*</h2>
          <radio-input
            value="registered_and_waiting"
            label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            name="waiting"
            v-model="iAmWaiting"
          />
          <radio-input
            value="not_planning"
            label="არ ვგეგმავ"
            name="waiting"
            v-model="iAmWaiting"
          />
          <radio-input
            value="had_covid_and_planning_to_be_vaccinated"
            label="გადატანილი მაქვს და ვგეგმავ აცრას"
            name="waiting"
            v-model="iAmWaiting"
          />
          <div
            v-if="values.wait === 'had_covid_and_planning_to_be_vaccinated'"
            class="mt-10"
          >
            <h2 class="ml-14 w-96">
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </h2>
            <p class="ml-12 mt-5">👉 რეგისტრაციის ბმული</p>
            <a
              class="text-blue-500 ml-12"
              target="_blank"
              href=" https://booking.moh.gov.ge/"
            >
              https://booking.moh.gov.ge/
            </a>
          </div>
        </div>
      </section>
      <img
        class="h-[600px] w-[800px] mt-48 z-10"
        src="@/assets/images/doctor.png"
        alt="Doctor"
      />

      <transition :name="animation" appear>
        <img
          class="h-[250px] mt-10 absolute top-36 right-[700px]"
          src="@/assets/images/star.png"
          alt="Doctor"
        />
      </transition>
    </form-header>
    <footer class="mt-14">
      <the-navigation
        :isActive="meta.valid"
        :previousPage="{ name: 'CovidQuestions' }"
        :nextPage="{ name: 'CovidPolicy' }"
        @storeData="submit"
      ></the-navigation>
    </footer>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import RadioInput from "@/components/RadioInput.vue";
import TheNavigation from "../components/TheNavigation.vue";
import FormHeader from "../components/FormHeader.vue";
export default {
  components: {
    Form,
    RadioInput,
    TheNavigation,
    FormHeader,
  },
  data() {
    return {
      hadVaccine: "",
      vaccinationStage: "",
      iAmWaiting: "",
      lastPath: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((page) => {
      page.prevRoute = from;
    });
  },
  created() {
    this.lastPath = this.$router.options.history.state.back;
  },
  computed: {
    animation() {
      if (this.lastPath === "/covid-policy") {
        return "backStar";
      } else {
        return "star";
      }
    },
  },
};
</script>

<style scoped>
.star-enter-from {
  translate: -220px 220px;
}
.star-enter-active {
  transition: all 0.5s ease-in;
}
.star-enter-to {
  translate: 0px 0px;
}
.backStar-enter-from {
  translate: 220px 220px;
}
.backStar-enter-active {
  transition: all 0.5s ease-in;
}
.backStar-enter-to {
  translate: 0px 0px;
}
</style>
