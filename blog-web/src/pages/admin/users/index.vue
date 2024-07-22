<template>
  <a-card title="Tài khoản" style="width: 100%">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-end">
        <a-button type="primary">
          <router-link :to="{ name: 'admin-users-create' }">
            <i class="fa-solid fa-plus"></i>
          </router-link>
        </a-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a-table :dataSource="users.value" :columns="columns" :scroll="{ x: 576 }">
          <template #bodyCell="{ column, index, record }">
            <templat v-if="column.key === 'index'">
              <span>{{ index + 1 }}</span>
            </templat>

            <template v-if="column.key === 'departments'">
              <span class="'text-primary'">{{
                record.departments
              }}</span>
            </template>

            <template v-if="column.key === 'status'">
              <label class="switch">
                <input type="checkbox" :checked="record.status === '1'" @click="handleChange(record.id, $event)">
                <span class="slider round"></span>
              </label>

              <p :class="record.status === '1' ? 'text-primary' : 'text-danger'">{{
                record.status === '1' ? 'Active' : 'Not Active'
              }}</p>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>
</template>

<script>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user.store.js";
import { useMenu } from "@/stores/use-menu.js";

export default({
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);
    const { getUsers, users, changeStatusUsers } = useUserStore();
    const checked = ref(false);
    const columns = [
      {
        title: "#",
        key: "index",
        width: 50,
      },
      {
        title: "Avatar",
        key: "avatar",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Họ Tên",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Phòng ban",
        dataIndex: "departments",
        key: "departments",
        responsive: ["sm"],
      },
      {
        title: "Vai trò",
        key: "departments",
        responsive: ["sm"],
      },
      {
        title: "Tình trạng",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Công cụ",
        key: "action",
        fixed: "right",
      },
    ];

    const handleChange = async (id, event) => {
      const newStatus = event.target.checked ? '1' : '0';
      await changeStatusUsers(id, newStatus);
    };

    onMounted(async () => {
      await getUsers()
    });

    return {
      users,
      columns,
      checked,
      handleChange
    };
  },
});
</script>

<style type="text/css">
  .switch {
  position: relative;
  display: inline-block;
  width:50px;
  height: 26px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>