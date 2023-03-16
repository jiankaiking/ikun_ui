<template>
  <el-form :model="formData" ref="rulesForm" :label-width="labelWidth">
    <el-row :gutter="24">
      <el-col v-for="(item, index) in formColum" :span="item.span || 12">
        <el-form-item
          :label="item.label"
          :rules="computedRules(item)"
          :key="index"
          :prop="item.field"
        >
          <component
            :data="formData"
            :is="componentsArr[item.type]"
            v-bind="{ ...item }"
          ></component>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button @click="handleSubmit(rulesForm)">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import CRadio from "./Radio.vue";
import CSelect from "./Select.vue";
import CInput from "./Input.vue";

const emits = defineEmits(["submit"]);
import type { FormInstance } from "element-plus";

const props = defineProps({
  formItem: {
    type: Array,
    default: () => [],
  },
  labelWidth: {
    type: String,
    default: "120px",
  },
  defaultData: {
    type: Object,
    default: () => {},
  },
  data: {
    type: Object,
    default: () => {},
  },
});

const rulesForm = ref<FormInstance>();
const formData: { [key: string]: [value: string] } = reactive({});

const componentsArr = reactive({
  radio: shallowRef(CRadio),
  select: shallowRef(CSelect),
  input: shallowRef(CInput),
});

watch(
  props.defaultData,
  (value) => {
    Object.keys(value).forEach((keys) => {
      formData[keys] = value[keys];
    });
  },
  { immediate: true }
);
watch(
  props.data,
  (value) => {
    Object.keys(value).forEach((keys) => {
      formData[keys] = value[keys];
    });
  },
  { immediate: true }
);
const formColum: any = computed(() => {
  return props.formItem?.filter((item: any) => {
    if (item.hidden) return false;
    const { condition } = item;
    if (condition) {
      const { value, key } = condition;
      return Array.isArray(value)
        ? value.includes(formData[key])
        : formData[key] === value;
    }
    return true;
  });
});

const validateField = (field: string, callBack: Function) => {
  rulesForm.value.validateField(field, (e) => {
    callBack && callBack(e);
  });
};
const computedRules = (row: any) => {
  return [
    {
      required: true,
      trigger: "blur",
      validator: (rule: any, value: any, callback: any) => {
        if (["", undefined, null].includes(value)) {
          callback(new Error(`请输入${row.label}`));
        } else {
          callback();
        }
      },
    },
  ];
};
const handleSubmit = (rulesForm: FormInstance) => {
  rulesForm.validate((field) => {
    emits("submit", formData);
  });
};

defineExpose({
  validateField,
  handleSubmit,
});
</script>

<style scoped></style>
