<template>
  <section class="vh-100">
    <div id="id01" class="modal">
      <a-form
        ref="formRef"
        :model="formState"
        name="basic"
        autocomplete="off"
        :rules="rules"
        class="modal-content animate"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div class="imgcontainer">
          <img src="@/assets/img/logo_login.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label><b>Email</b></label>
          <a-form-item
          name="email"
          :rules="rules.email"
        >
          <a-input v-model:value="formState.email" />
        </a-form-item>

          <label><b>Password</b></label>
          <a-form-item
            name="password"
            :rules="rules.password"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-button type="primary" class="btn-login" html-type="submit">Login</a-button>
          <label>
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
          </label>
        </div>

        <div class="container" style="background-color: #f1f2f7">
          <button
            type="button"
            class="cancelbtn"
          >
            Sigup
          </button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </a-form>
    </div>
  </section>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useAuthStore } from "@/stores/login.js";

export default {
  setup() {
    const userStore = useAuthStore;
   console.log(userStore.getUser);

    const formState = reactive({
      email: '',
      password: '',
      remember: false,
    });

    const rules = {
      password: [
        {
          required: true,
          message: "Please input password",
          trigger: "change",
        },
        {
          min: 3,
          message: "Length should be 3",
          trigger: "blur",
        },
      ],
      email: [
        {
          required: true,
          message: "Please input your email!",
          trigger: "change",
        },
      ],
    };

    const onFinish = () => {
      const { email, password } = formState.value;
      console.log('Success:', formState.value);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return { onFinish,onFinishFailed, formState, rules, userStore};
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
}

button {
  background-color: #707fdd;
  color: #fff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 2px 18px;
  background: #707fdd;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
  padding-top: 20px;
}

img.avatar {
  width: 40%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f1f2f7;
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>

<style>
.ant-input {
  height: 40px !important;
  margin: 0 !important;
}

.ant-input-password {
  height: 40px !important;
}

.ant-input-password .ant-input {
  height: 30px !important;
}

.btn-login {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
</style>
