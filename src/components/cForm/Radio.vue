<template>
  <el-radio-group v-model="data[field]">
    <el-radio label="1" border>Option A</el-radio>
    <el-radio label="2" border>Option B</el-radio>
  </el-radio-group>
</template>

<script setup>
const props = defineProps({
  label: String,
  data: {
    type: Object,
    default: () => {},
  },
  field: {},
  blurFn: {
    type: Function,
    default: () => {},
  },
});
</script>

<style scoped></style>
