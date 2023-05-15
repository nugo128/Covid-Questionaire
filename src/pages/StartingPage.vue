<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <transition name="logo" @after-enter="imgEnter" appear>
      <img class="w-24 h-24" src="../assets/images/StartLogo.png" alt="logo" />
    </transition>
    <div v-if="imageIsSet" class="w-96 h-24 bg-[#B5C0C7] z-50"></div>
    <transition name="link" appear>
      <div
        v-if="imageIsSet"
        class="z-0 font-bold text-3xl w-24 flex justify-center"
      >
        <router-link :to="'personal-info'" class="text-center link"
          >კითხვარის დაწყება</router-link
        >
      </div>
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
.link-enter-from {
  translate: 0px -110px;
  opacity: 0;
}
.link-enter-active {
  transition: all 1s ease-out;
}
.link-enter-to {
  opacity: 1;
}
.link:hover {
  text-shadow: 2px 0 #bcc2c6, 3px 0 black;
}
</style>
