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
      >
        <div class="imgcontainer">
          <img src="@/assets/img/logo_login.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label for="uname"><b>Username</b></label>
          <a-form-item name="username">
            <a-input v-model="formState.username" />
          </a-form-item>

          <label for="psw"><b>Password</b></label>
          <a-form-item name="password">
            <a-input-password v-model="formState.password" />
          </a-form-item>

          <button type="submit" @click="onSubmit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="container" style="background-color: #f1f2f7">
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
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
import { reactive, ref } from "vue";
export default {
  setup() {
    const formState = reactive({
      username: "",
      password: "",
    });

    const formRef = ref();

    const rules = {
      password: [
        {
          required: true,
          message: "Please input password",
          trigger: "change",
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur",
        },
      ],
      username: [
        {
          required: true,
          message: "Please input your username!",
          trigger: "change",
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur",
        },
      ],
    };

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log("values", formState, toRaw(formState));
        })
        .catch((error) => {
          console.log("error 1111", error);
        });
    };
    return { onSubmit, formState, rules, formRef };
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
  padding: 12px 20px;
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
</style>
