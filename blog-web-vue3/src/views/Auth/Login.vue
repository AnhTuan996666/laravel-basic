<template>
  <div class="login">
    {{ $t('login.btn_login') }}
      <LanguageVue />
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
    <el-form-item label="Confirm" prop="name" label-position="top">
      <el-input v-model="ruleForm.name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Password" prop="password"  label-position="top">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import '@/assets/style/pages/login.scss';
import LanguageVue from '@/components/Language.vue';

export default {
  name: 'login-page',
  components: {
    LanguageVue
  },
  setup() {
    const ruleFormRef = ref(null);
    const labelPosition = ref('right');

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (ruleForm.checkPass !== '') {
          if (!ruleFormRef.value) return;
          ruleFormRef.value.validateField('checkPass');
        }
        callback();
      }
    };

    const ruleForm = reactive({
      password: '',
      name: '',
    });

    const rules = reactive({
      password: [{ validator: validatePass, trigger: 'blur' }],
    });

    const submitForm = (formEl) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!');
        }
      });
    };

    return {
      ruleFormRef,
      ruleForm,
      rules,
      submitForm,
      labelPosition
    };
  }
};
</script>

<style>

</style>

