<template>
  <div>{{ useCount.count }}</div>
  <div @click="inc">+</div>
  <div @click="dec">-</div>
</template>

<script setup lang="ts">
import { useCountStore } from "@/store/modules/demo";
const useCount = useCountStore();
const { inc, dec } = useCount;
</script>

<style scoped></style>
