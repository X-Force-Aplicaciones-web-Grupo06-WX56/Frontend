<script>
export default {
  name: 'footer-app',
  data(){
    return {
      features:['Home','Services','Commends','About us','Contact us'],
      imageUrl: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/logo%20de%20proyecto1-01.png",
      imageIg: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/ig.png",
      imageWp: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/WhatsApp-logo.png",
      imageFb: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/fc.png",
      imageCellphone: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/lla.png",
      imageMessage: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/me.png",
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="container-img">
      <img :src="imageUrl" alt="LawConnect" width="145" height="50"/>    </div>
    <div class="container-contact">
      <div class="container-contact-item">
        <img :src="imageCellphone" width="25px" height="auto" alt="">+51 4568745951
      </div>
      <div class="container-contact-item">
        <img :src="imageMessage" width="25px" height="auto" alt="">lawConnect@gmail.com
      </div>
      <div class="container-contact-item">Acerca de Nosotros</div>
      <div class="container-contact-item">Términos y Condiciones</div>
      <div class="container-contact-item">Política de Privacidad</div>
      <div class="container-contact-item">© 2024 Law Connect. Todos los derechos reservados.</div>
    </div>
    <div class="container-features">
      <ul>
        <li class="container-features-item" v-for="feature in features" :key="feature">{{feature}}</li>
      </ul>
    </div>
    <div class="container-social">
      <h3>Social</h3>
      <div class="container-social-icons">
        <img :src="imageIg" width="50px" height="auto" alt="Instagram">
        <img :src="imageWp" width="50px" height="auto" alt="Whatsapp">
        <img :src="imageFb" width="30px" height="auto" alt="Facebook">
      </div>
    </div>
  </div>

</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  background-color: rgb(26, 1, 26);
  width: 100%;
  color: rgb(223, 226, 13);
}
.container-img{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
li{
  list-style: none;
}
.container-social{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.container-social-icons{
  display: flex;
  gap: 1rem;
  cursor: pointer;
}
.container-features-item{
  cursor: pointer;
}
.container-features-item:hover{
  color:  #a200bd;
}

.container-contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-contact-item{
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
</style>