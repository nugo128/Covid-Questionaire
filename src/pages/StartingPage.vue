<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <transition name="logo" @after-enter="imgEnter" appear>
      <img class="w-24 h-24" src="../assets/images/StartLogo.png" alt="logo" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageIsSet: false,
    };
  },
  methods: {
    imgEnter() {
      this.imageIsSet = true;
    },
  },
};
</script>

<style scoped>
.logo-enter-from {
  scale: 25;
}
.logo-enter-active {
  transition: all 0.7s ease-out;
}
.logo-enter-to {
  translate: 0px -85px;
  scale: 1;
}
</style>
