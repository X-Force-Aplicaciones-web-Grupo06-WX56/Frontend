<template>
  <div id="app">
    <!-- Aquí se incluye el componente FeatureSection -->
    <FeatureSection />
  </div>
</template>

<script>
// Cambia la ruta de importación si el archivo está en src/public/pages
import FeatureSection from '@/public/pages/FeatureSection.vue';

export default {
  components: {
    FeatureSection
  }
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>


