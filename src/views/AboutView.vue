<template>
  <div class="about">
    <div>{{ stranger.name }}</div>
    <div>{{ msg }}</div>
    <el-button type="danger">11111</el-button>
    <el-select></el-select>
  </div>
</template>
<script lang="ts" setup>
interface human<T> {
  name: string;
  age: number;
  sex: T;
}
const stranger = reactive<human<number>>({
  name: "李四",
  age: 20,
  sex: 1,
});

const msg = ref<string>("111");
</script>

<style></style>
