<template>
  <label class="w-full font-bold text-xl" :for="name">{{ label }}</label>
  <Field
    class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
    :id="name"
    :name="name"
    :rules="inputRule"
    :type="type"
    :value="val"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    @blur="saveData"
  />
  <ErrorMessage class="text-red-400 text-sm px-5" :name="name" />
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import store from "../store/index";
export default {
  data() {
    return {
      val: "",
    };
  },
  props: {
    inputRule: { type: String, required: true },
    type: { type: String, required: true },
    label: { type: String, required: true },
    name: { type: String, required: true },
    modelValue: { type: String, required: false },
    placeholder: { type: String, required: false },
  },
  emits: ["update:modelValue"],
  components: {
    Field,
    ErrorMessage,
    Form,
  },
  methods: {
    saveData() {
      let data = this.modelValue;
      if (!data) {
        data = localStorage.getItem(this.name);
      }
      localStorage.setItem(this.name, data);
      console.log(this.$store.state.info.antibodies);
    },
  },
  created() {
    const data = localStorage.getItem("name");
    const lastname = localStorage.getItem("lastname");
    const email = localStorage.getItem("email");
    const period = localStorage.getItem("period");
    const number = localStorage.getItem("antiBodies");
    const test_date = localStorage.getItem("date");
    const antibodies = {
      test_date: test_date,
      number: number,
    };
    if (
      localStorage.getItem(this.name) &&
      (!this.$store.state.name ||
        !this.$store.state.lastname ||
        !this.$store.state.email ||
        !this.$store.state.period ||
        !this.$store.state.number ||
        !this.$store.state.test_date)
    ) {
      store.commit("saveData", data);
      store.commit("saveLastname", lastname);
      store.commit("saveEmail", email);
      store.commit("saveDate", period);
      store.commit("save_antibodies", antibodies);
    }
  },
  beforeMount() {
    if (localStorage.getItem(this.name) !== "undefined") {
      this.val = localStorage.getItem(this.name);
    }
  },
};
</script>
