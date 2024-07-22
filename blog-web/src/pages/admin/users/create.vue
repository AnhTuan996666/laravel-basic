<template>
 <a-form
    ref="formRef"
    :model="users"
    name="basic"
    autocomplete="off"
    class="modal-content animate"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
      >
  <a-card title="Tạo mới Tài khoản" style="width: 100%">
    <div class="row mb-3">
      <div class="col-12 col-sm-4 mb-3">
        <div class="row">
          <div class="col-12 d-flex justify-content-center mb-3">
            <a-avatar shape="square" :size="200">
              <template #icon>
                <img src="../../../assets/users.jpg" alt="Avatar" />
              </template>
            </a-avatar>
          </div>

          <div class="col-12 d-flex justify-content-center">
            <a-button type="primary">
              <i class="fa-solid fa-plus me-2"></i>
              <span>Chọn ảnh</span>
            </a-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-8">
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Tên Tài khoản:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input placeholder="Tên Tài khoản" allow-clear v-model:value="users.name"/>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Họ và Tên:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input placeholder="Họ và Tên" allow-clear v-model:value="users.username" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Email:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input placeholder="Email" allow-clear  v-model:value="users.email" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Phòng ban:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-select
              show-search
              placeholder="Phòng ban"
              style="width: 100%"
              :options="departments.value"
              :filter-option="[]"
              v-model="selectedOption"
            ></a-select>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Mật khẩu:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password placeholder="Mật khẩu" v-model:value="users.password" allow-clear />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Xác nhận mật khẩu:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password placeholder="Xác nhận mật khẩu" v-model:value="users.password_confirmation" allow-clear />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
        <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
          <router-link :to="{ name: 'admin-users' }">
            <span>Hủy</span>
          </router-link>
        </a-button>

        <a-button type="primary" html-type="submit">
          <span>Lưu</span>
        </a-button>
      </div>
    </div>
  </a-card>
</a-form>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from "vue";
import { useMenu } from "@/stores/use-menu.js";
import { useDepartment } from "@/stores/department.store.js";
import { useUserStore } from "@/stores/user.store.js";

export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);
    const selectedOption = ref(null);
    const { departments, getDepartment } = useDepartment();
    const { createUsersApi } = useUserStore();

    const users = reactive({
      email: "",
      password: "",
      username: "",
      name: "",
      password: "",
      password_confirmation: "",
      department_id: departments.value,
    });

    const onFinish = async () => {
      const res = await createUsersApi(users);
      console.log('res', res);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    onMounted( async () => {
      await getDepartment();
    });

    return {
      departments,
      selectedOption,
      onFinish,
      onFinishFailed,
      users
    };
  },
});
</script>
