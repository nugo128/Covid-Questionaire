<template>
  <Form class="h-screen" v-slot="{ meta }">
    <form-header pageNum="1">
      <div class="w-1/3 flex flex-col gap-10 mt-56">
        <div class="mb-5">
          <text-input
            inputRule="required|min_characters:3|max_characters:255"
            type="text"
            label="სახელი*"
            name="name"
            v-model="nameValue"
          />
        </div>
        <div class="mb-5">
          <text-input
            inputRule="required|min_characters:3|max_characters:255"
            type="text"
            label="გვარი*"
            name="lastname"
            v-model="lastNameValue"
          />
        </div>
        <div class="mb-5">
          <text-input
            inputRule="required|email|wrongEmail"
            type="email"
            label="მეილი*"
            name="email"
            v-model="emailValue"
          />
        </div>
        <div class="mt-16 w-64">
          <div class="w-56 border-b-2 border-gray-500 mb-5"></div>
          <p class="text-gray-500">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </div>
      <div>
        <img
          class="h-[700px] mt-32 mr-4"
          src="@/assets/images/PersonalInfoImg.png"
          alt="Boy and the girl with stars in eyes"
        />
        <transition name="line" appear>
          <div
            class="bg-[#D6D16E] absolute top-80 left-[975px] w-[620px] h-16 opacity-70"
          ></div>
        </transition>
      </div>
    </form-header>
    <div>
      <the-navigation
        :isActive="meta.valid"
        :pageNum="1"
        :nextPage="{ name: 'CovidQuestions' }"
        @storeData="submit"
      ></the-navigation>
    </div>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import TextInput from "../components/TextInput.vue";
import FormHeader from "../components/FormHeader.vue";
import TheNavigation from "../components/TheNavigation.vue";

export default {
  data() {
    return {
      nameValue: "",
      lastNameValue: "",
      emailValue: "",
    };
  },
  components: {
    Form,
    TextInput,
    FormHeader,
    TheNavigation,
  },
  methods: {},
  beforeMount() {
    this.nameValue = this.$store.state.info.name;
    this.lastNameValue = this.$store.state.info.lastname;
    this.emailValue = this.$store.state.info.email;
  },
};
</script>
<style scoped>
.line-enter-from {
  translate: 20px 30px;
  width: 0px;
}
.line-enter-active {
  transition: all 0.5s ease-out;
}
.line-enter-to {
  width: 620px;
}
</style>
