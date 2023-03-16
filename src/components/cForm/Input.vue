<template>
  <el-input
    v-model="data[field]"
    :placeholder="`请输入${props.label}`"
    @blur="(e) => blurFn(e)"
  />
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
