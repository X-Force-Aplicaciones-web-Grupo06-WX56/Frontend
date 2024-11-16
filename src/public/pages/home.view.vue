<script>
import {RouterLink} from "vue-router";
export default {
  name: "home-page",
  title: "About",
}
</script>

<template>
  <div class="container-main">
    <div class="container-info">
      <div class="container-info-text">Turning legal challenges into victories, right from the start! Connect with us today and let's redefine your legal journey.</div>
      <div class="container-info-boxShadow">At Law Connect, uncover a new realm of legal possibilities. Our platform equips you with the tools to navigate the legal landscape efficiently, connecting you with a diverse network of legal professionals and resources. Say farewell to legal challenges and embark on a transformative legal journey with Law Connect.</div>
      <div class="">
        <button class="container-button">Know the benefifts</button>
      </div>
    </div>
    <div class="container-login">
      <router-link :to="{name:'log-in'}"><button class="container-button" style="font-size: 32px">Let's start</button></router-link>
    </div>
  </div>
</template>

<style>
.container-main{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('https://raw.githubusercontent.com/X-Force-Aplicaciones-web-Grupo06-WX56/Landing-Page/refs/heads/main/assets/img/ju2.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 75vh;
}
.container-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(223, 226, 13);
  width: 35%;
  font-size: 3vh;
  gap: 12px;
}
.container-info-text{
  font-weight: 700;
  line-height: 43.2px;
  font-size: 25px;
  text-align: center;
  width: 100%;
}
.container-info-boxShadow{
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  color:rgb(162, 0, 189);
  text-align: center;
}
.container-button {
  background-color: rgb(162, 0, 189);
  color: rgb(223, 226, 13);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 22px;
  cursor: pointer;
  //transition: background-color 0.3s ease;
}

.container-button:hover {
  background-color: rgb(142, 0, 169);
}
</style>