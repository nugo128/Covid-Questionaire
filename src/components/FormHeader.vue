<template>
  <div class="px-[200px]">
    <header class="border-black border-b-2 pb-6 pt-24 w-[1500px] fixed z-40">
      <div class="w-full flex justify-between items-center">
        <img src="@/assets/images/redberry.png" alt="redberry" />
        <h2 class="font-blod text-4xl">
          <span>{{ pageNum }}</span
          ><span>/4</span>
        </h2>
      </div>
    </header>
    <sectopm class="flex justify-between">
      <slot></slot>
    </sectopm>
  </div>
</template>

<script>
export default {
  props: { pageNum: { type: Number, required: true } },
};
</script>
