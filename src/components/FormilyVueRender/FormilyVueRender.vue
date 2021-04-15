<template>
  <div>
    <FormProvider :form="createForm()" ></FormProvider>
  </div>
</template>

<script>
// import { Input } from 'ant-design-vue';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/vue';
import 'ant-design-vue/dist/antd.css';
export default {
  name: 'FormilyVueRender',
  components: { FormProvider, Field },
  data() {
    return {
      // Input,
      // form: createForm(),
      createForm
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
