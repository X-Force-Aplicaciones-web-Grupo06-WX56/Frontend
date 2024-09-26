<template>
  <div class="login-container">
    <div class="logo">
      <img src="https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/logo%20de%20proyecto1-01.png" alt="Law Connect Logo" width="145" height="50"/>
    </div>
    <div class="login-box">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Ingresa tu email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Ingresa tu password" />
        </div>
        <button type="submit" class="btn-submit">INICIAR SESION</button>
      </form>
      <p class="register-link">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const onSubmit = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  // Aquí puedes agregar la lógica para autenticar al usuario
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.logo {
  margin-bottom: 20px;
}

.logo img {
  width: 150px;
  height: auto;
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: rgb(162, 0, 189);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: rgb(142, 0, 169);
}

.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link a {
  color: #6a0dad;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
