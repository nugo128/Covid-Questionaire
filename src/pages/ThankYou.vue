<template>
  <div class="h-screen bg-black flex flex-col justify-center items-center">
    <transition name="bigStar" appear>
      <div class="mr-60" v-show="text">
        <img class="" src="@/assets/images/big-star.png" alt="big star" />
      </div>
    </transition>
    <transition name="thankYou" @after-enter="afterText" appear>
      <h1 class="text-white text-6xl font-bold tracking-[0.3rem] my-5">
        მადლობა
      </h1>
    </transition>
    <transition name="smallStar" appear>
      <div class="ml-60" v-show="text">
        <img class="" src="@/assets/images/small-star.png" alt="small star" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: false,
    };
  },
  methods: {
    afterText() {
      this.text = true;
    },
  },
};
</script>

<style scoped>
.thankYou-enter-from {
  translate: 0px 15px;
  opacity: 0;
}
.thankYou-enter-active {
  transition: all 0.8s ease-in;
}
.thankYou-enter-to {
  translate: 0px 15px;
  opacity: 1;
}

.bigStar-enter-from {
  translate: 40px 40px;
}
.bigStar-enter-active {
  transition: all 1s ease-in-out;
}
.bigStar-enter-to {
  translate: 0px 0px;
}

.smallStar-enter-from {
  translate: -40px -40px;
}
.smallStar-enter-active {
  transition: all 1s ease-in-out;
}
.smallStar-enter-to {
  translate: 0px 0px;
}
</style>
