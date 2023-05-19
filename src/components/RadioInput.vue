<template>
  <div class="ml-3 mb-5">
    <label :for="name" class="text-lg ml-2 text-center">
      <Field
        type="radio"
        class="appearance-none rounded-full box-shadow border-2 p-[6px] checked:bg-neutral-700 mr-2"
        :name="name"
        :value="value"
        @change="$emit('update:modelValue', $event.target.value)"
        :rules="rules"
        @blur="saveData"
        v-model="val"
      />
      {{ label }}
    </label>
  </div>
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
    modelValue: { type: String, required: false },
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true },
    rules: { type: String, required: false },
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
      store.commit("save_" + this.name, data);
      localStorage.setItem(this.name, data);
    },
  },
  created() {
    const data = localStorage.getItem(this.name);

    if (!this.$store.state[`${this.name}`]) {
      store.commit("save_" + this.name, data);
    }
  },
  beforeMount() {
    if (localStorage.getItem(this.name) !== "undefined") {
      this.val = localStorage.getItem(this.name);
    }
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
