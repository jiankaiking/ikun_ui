<template>
  <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in props.list"
      :key="item[valueKey]"
      :label="item[labelKey]"
      :value="item[valueKey]"
    />
  </el-select>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  valueKey: {
    type: String,
    default: "value",
  },
  labelKey: {
    type: String,
    default: "label",
  },
});
const value = ref();
</script>

<style scoped></style>
