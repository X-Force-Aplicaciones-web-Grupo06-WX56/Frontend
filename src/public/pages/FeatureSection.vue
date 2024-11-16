<template>
  <div>
    <header>
      <h1>LawConnect</h1>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Notificaciones</li>
          <li>Casos</li>
          <li>Para Abogados</li>
        </ul>
      </nav>
    </header>
    <div v-if="!registered" class="registration-form">
      <h2>LawConnect (Abogados)</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="newLawyer.function" placeholder="Función" required />
        <input type="text" v-model="newLawyer.id" placeholder="DNI/Pasaporte" required />
        <input type="text" v-model="newLawyer.city" placeholder="Ciudad" required />
        <label>Certificado</label>
        <input type="file" @change="onFileChange" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>

    <main v-else>
      <div class="profile">
        <div class="user-info">
          <img src="/src/assets/abogado696.jpg" alt="Abogado" class="profile-image" />
          <div class="profile-details">
            <h2><strong>Pedro Gallego Alcantara</strong></h2>
            <p><strong>Abogado de violencia familiar</strong></p>
            <button class="consultar"><strong>Consultar</strong></button>
          </div>
        </div>

        <!-- Cámara al costado del nombre -->
        <div class="camera">
          <img src="/src/assets/img_5.png" alt="Camera" width="30px" />
        </div>

        <!-- Proponer Precios -->
        <div class="pricing">
          <h3><strong>Proponer Precios</strong></h3>
          <div>
            <input type="radio" id="chat" name="price" value="20" />
            <label for="chat"><strong>Chat S/20.00</strong></label>
          </div>
          <div>
            <input type="radio" id="video" name="price" value="40" />
            <label for="video"><strong>Video Llamada S/40.00</strong></label>
          </div>
          <div>
            <input type="radio" id="presencial" name="price" value="50" />
            <label for="presencial"><strong>Presencial S/50.00</strong></label>
          </div>
        </div>

        <!-- Más Perfiles en Común -->
        <div class="common-profiles">
          <h3><strong>Más Perfiles en Común</strong></h3>
          <div class="profile-list">
            <div v-for="lawyer in lawyers" :key="lawyer.id" class="profile-item">
              <img :src="lawyer.image" alt="Abogado" class="profile-image" />
              <div>
                <h4><strong>{{ lawyer.name }}</strong></h4>
                <p><strong>{{ lawyer.specialty }}</strong></p>
                <div class="stars">
                  <span v-for="n in 5" :key="n" class="star">★</span>
                </div>
                <button><strong>Ver Perfil</strong></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registered: false,
      newLawyer: {
        function: "",
        id: "",
        city: ""
      },
      file: null,
      lawyers: [
        { id: 1, name: "Ana Pérez", specialty: "Derecho Penal", image: "/src/assets/img.png" },
        { id: 2, name: "Carlos Sánchez", specialty: "Derecho Laboral", image: "/src/assets/img_1.png" },
        { id: 3, name: "Laura Gómez", specialty: "Derecho Civil", image: "/src/assets/img_2.png" },
        { id: 4, name: "Miguel Díaz", specialty: "Derecho Mercantil", image: "/src/assets/img_3.png" },
        { id: 5, name: "Sofía Martínez", specialty: "Derecho Familiar", image: "/src/assets/img_4.png" }
      ]
    };
  },
  methods: {
    register() {
      this.registered = true;
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    }
  }
};
</script>

<style scoped>
/* Scoped styles for the component */
header {
  background: #4CAF50;
  color: white;
  padding: 1.5em;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

.profile {
  padding: 2em;
  font-family: Arial, sans-serif;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.profile-image {
  border-radius: 50%;
  margin-right: 30px;
  width: 150px;
  height: 150px;
}

.profile-details {
  margin-left: 30px;
}

.profile-details h2,
.profile-details p {
  margin: 0;
  font-weight: bold;
}

.profile-details button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.profile-details button:hover {
  background-color: #45a049;
}

.camera {
  display: inline-block;
  margin-left: 10px;
}

.camera img {
  cursor: pointer;
}

.pricing {
  margin-top: 30px;
}

.pricing div {
  margin: 10px 0;
}

.common-profiles {
  margin-top: 40px;
}

.profile-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.profile-item {
  display: flex;
  align-items: center;
  width: 280px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-item img {
  border-radius: 50%;
  margin-right: 20px;
  width: 80px;
  height: 80px;
}
/* Cambia el color de los nombres de los abogados */
.profile-item h4 {
  color: #4CAF50; /* Verde, o el color que desees */
}

/* Cambia el color de la especialidad de los abogados */
.profile-item p {
  color: #555; /* Gris oscuro, o el color que prefieras */
}

.stars {
  color: gold;
  margin-top: 5px;
}

.stars .star {
  margin-right: 2px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #45a049;
}
</style>

