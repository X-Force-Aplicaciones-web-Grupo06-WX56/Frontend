<script>

  export default {
    name: "nav-bar",
    data(){
      return {
        imageUrl: "https://x-force-aplicaciones-web-grupo06-wx56.github.io/Landing-Page/assets/img/logo%20de%20proyecto1-01.png",
        home: 'home'.toUpperCase(),
        service: 'service'.toUpperCase(),
        comments: 'comments'.toUpperCase(),
        about: 'about us'.toUpperCase(),
        contact: 'contact us'.toUpperCase(),
      }
    }
  }
</script>

<template>
  <pv-toolbar style="border-radius: 0; padding: 1rem 1rem 1rem 1.5rem; border: none;" class="toolbar-container">
    <template #start>
      <div class="flex items-center gap-2 wrapper-img">
        <img :src="imageUrl" alt="LawConnect" width="145" height="50"/>
      </div>
    </template>
    <template #center>
      <div class="wrapper-options">
      <pv-button class="custom-button" :label="home" badgeSeverity="contrast" outlined/>
      <pv-button class="custom-button" :label="service" badgeSeverity="contrast" outlined />
      <pv-button class="custom-button" :label="comments" badgeSeverity="contrast" outlined />
      <pv-button class="custom-button" :label="about" badgeSeverity="contrast" outlined />
      <pv-button class="custom-button" :label="contact" badgeSeverity="contrast" outlined />
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.wrapper-img{
  padding-left: 190px;
}
.wrapper-options{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
.custom-button{
  color: rgb(0,0,0) !important;
  border: 0;
}
.toolbar-container{
  background-color: rgb(255, 255, 255)
}

</style>