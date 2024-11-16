<script>
export default {
  name: 'service-view',
  data(){
    return {
      services: [
          {title:"Criminal law", description:"Legal defense in criminal cases, including felonies and misdemeanors.",img:"https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/1.png"},
          {title:"Civil law", description:"Legal assistance in civil disputes, such as contracts, property, and personal injury.",img:"https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/2.png"},
          {title:"Labor Law", description:"Representation in cases of wrongful termination, employment discrimination, and more.",img:"https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/3.png"},
          {title:"Family Law", description:"Legal advice on family matters, such as divorce, custody, and adoption.",img:"https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/4.jpg"},
      ]
    }
  }
}
</script>

<template>

  <div class="card-container">
    <pv-card class="body-card" v-for="service in services" :key="service.title">
      <template #header>
        <img alt="user header" :src="service.img"  width="310vw" height="310vh"/>
     </template>
      <template #title>{{service.title}}</template>
      <template #content>
        <p class="m-0">
        {{service.description}}
        </p>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card-container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 9rem;
  padding: 15px;
}
.body-card{
  color:black ;
  background-color: white;
  width:21rem;
  font-size: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
