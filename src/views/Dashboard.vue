<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">{{ store.getA }}</el-aside>
        <el-main>
          <Table></Table>
          <el-button></el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Table from "../layout/Table.vue";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const { age } = store.$state;
const handleChange = () => {
  store.setAge(123);
};
</script>
<style scoped>
.common-layout {
  position: relative;
  height: 100%;
  width: 100%;
}
>>> .el-container {
  height: 100%;
}
</style>
