<template>
  <CForm v-bind="{ ...formConfig }" ref="cForm" @submit="handleSubmit" />
  <el-button @click="handleField">校验名称</el-button>
  <el-button @click="handleItemHidden">隐藏名称</el-button>
</template>

<script setup lang="ts">
import CForm from "../components/cForm/index.vue";
const sexChange = (event: [string, number]) => {
  console.log(event);
};
import { initFormJsonItem } from "@/common/common";

const formConfig = reactive({
  labelWidth: "120px",
  formItem: [
    initFormJsonItem({ type: "input", label: "姓名1", field: "name1" }),
    {
      type: "input",
      label: "姓名",
      field: "name",
    },
    {
      type: "select",
      label: "爱好",
      list: [
        { value: "1", label: "打篮球" },
        { value: "2", label: "跑步" },
      ],
      changeFn: sexChange,
      field: "active",
    },
    {
      type: "radio",
      label: "性别",
      list: [
        { value: "1", label: "男" },
        { value: "2", label: "女" },
      ],
      changeFn: sexChange,
      field: "phone",
    },
  ],
  defaultData: {},
  data: {},
});
const handleSubmit = (e: object) => {
  console.log(e);
};
const handleItemHidden = () => {
  formConfig.formItem[0]["hidden"] = !formConfig.formItem[0]["hidden"];
};
const cForm = ref<any>(null);
const handleField = () => {
  cForm.value.validateField("name", (e: boolean) => {
    console.log(e);
  });
};
</script>

<style scoped></style>
