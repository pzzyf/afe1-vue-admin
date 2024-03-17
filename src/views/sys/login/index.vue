<template>
  <div class="login-container">
    <div class="login">
      <el-card class="w-100 opacity-80">
        <h2 class="text-center">
          afe1-vue-admin
        </h2>
        <el-form :model="loginData">
          <el-form-item>
            <el-input
              v-model="loginData.username"
              size="large"
              prefix-icon="search"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginData.password"
              size="large"
              prefix-icon="lock"
            />
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          size="large"
          class="w-full"
        >
          登陆
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loginData = ref({
    username: "admin",
    password: "123456",
})
</script>

<style scoped>
.login-container {
    width: 100vw;
    height: 100vh;
    background: url('../../../assets/images/iterm.jpeg') no-repeat center;
    background-size: cover;
}

.login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
