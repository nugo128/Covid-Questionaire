<template>
  <label :for="name" class="font-bold text-xl mt-5">{{ label }}</label>
  <textarea
    class="bg-inherit border border-gray-500 focus:outline-0 focus:border-black mt-5"
    :name="name"
    :id="name"
    cols="60"
    rows="5"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    modelValue: { type: String, required: false },
  },
  emits: ["update:modelValue"],
};
</script>
