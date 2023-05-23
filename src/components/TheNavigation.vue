<template>
  <div class="w-full flex justify-center gap-20">
    <router-link v-if="pageNum !== 1" :to="previousPage"
      ><img
        src="@/assets/images/previous.png"
        alt="left arrow"
        @click="submitData"
    /></router-link>
    <router-link
      v-if="pageNum !== 4"
      :class="{ ['opacity-40']: !isActive, ['pointer-events-none']: !isActive }"
      :to="nextPage"
      @click="submitData"
    >
      <img src="@/assets/images/next.png" alt="right arrow"
    /></router-link>
  </div>
</template>

<script>
export default {
  props: {
    pageNum: { type: Number, required: false },
    previousPage: { type: Object, required: false },
    nextPage: { type: Object, required: false },
    isActive: { type: Boolean, required: false },
  },
  emits: ["store-data"],
  methods: {
    submitData() {
      this.$emit("store-data");
    },
  },
};
</script>
