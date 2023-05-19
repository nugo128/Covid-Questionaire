<template>
  <label :for="name" class="font-bold text-xl mt-5">{{ label }}</label>
  <textarea
    class="bg-inherit border border-gray-500 focus:outline-0 focus:border-black mt-5"
    :name="name"
    :id="name"
    cols="60"
    rows="5"
    :value="modelValue ? modelValue : val"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="saveData"
  ></textarea>
</template>

<script>
import store from "../store/index";
export default {
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    modelValue: { type: String, required: false },
  },
  emits: ["update:modelValue"],
  methods: {
    saveData() {
      let data = this.modelValue;
      if (!data) {
        data = localStorage.getItem(this.name);
      }
      // store.commit("save_" + this.name, data);
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
