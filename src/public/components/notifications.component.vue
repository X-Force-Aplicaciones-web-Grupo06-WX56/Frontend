<script>
export default {
  name: 'notifications',
  data() {
    return {
      activeTab: 'all',
      currentUser: {
        name: 'Juan Pérez',
        img: 'https://via.placeholder.com/100',
      },
      notifications: [
        { id: 1, name: 'Usuario 1', message: 'Te ha enviado un mensaje', img: 'https://via.placeholder.com/50', type: 'all' },
        { id: 2, name: 'Usuario 2', message: 'Nuevo caso asignado', img: 'https://via.placeholder.com/50', type: 'cases' },
        { id: 3, name: 'Usuario 3', message: 'Te ha comentado en tu caso', img: 'https://via.placeholder.com/50', type: 'cases' },
      ]
    };
  },
  computed: {
    filteredNotifications() {
      return this.activeTab === 'all'
        ? this.notifications
        : this.notifications.filter(noti => noti.type === 'cases');
    }
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<template>
  <div class="notifications-container">
    <div class="left-sidebar">
      <div class="user-info">
        <img :src="currentUser.img" alt="User Image" class="user-image" />
        <h3>{{ currentUser.name }}</h3>
      </div>
    </div>
    <div class="main-content">
      <div class="buttons">
        <button @click="setTab('all')" :class="{ active: activeTab === 'all' }">Todo</button>
        <button @click="setTab('cases')" :class="{ active: activeTab === 'cases' }">Mis Casos</button>
      </div>
      <div class="notifications-list">
        <div v-for="notification in filteredNotifications" :key="notification.id" class="notification-item">
          <img :src="notification.img" alt="User Image" class="notification-user-image" />
          <div class="notification-details">
            <strong>{{ notification.name }}</strong> - {{ notification.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.notifications-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f5f5f5;
}

/* Barra lateral izquierda */
.left-sidebar {
  width: 250px;
  background-color: rgb(26, 1, 26);
  color: rgb(223, 226, 13);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
}

/* Contenedor principal de las notificaciones */
.main-content {
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Botones de filtro */
.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: 2px solid rgb(223, 226, 13);
  background-color: white;
  color: rgb(26, 1, 26);
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

button.active {
  background-color: rgb(223, 226, 13);
  color: rgb(26, 1, 26);
}

/* Lista de notificaciones */
.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border: 2px solid rgb(223, 226, 13);
  border-radius: 8px;
  transition: box-shadow 0.2s ease;
}

.notification-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.notification-user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(223, 226, 13);
}

.notification-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(26, 1, 26);
}
</style>
