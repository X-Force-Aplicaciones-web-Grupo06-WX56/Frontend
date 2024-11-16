<script>
export default {
  name: 'notifications',
  data() {
    return {
      activeTab: 'all',
      currentUser: {
        name: 'Juan Pérez',
        img: 'https://via.placeholder.com/120',
        description: 'Abogado especialista en derecho familiar'
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
  <div class="page-background">
    <div class="notifications-container">
      <div class="user-profile">
        <img :src="currentUser.img" alt="User Image" class="avatar" />
        <h2>{{ currentUser.name }}</h2>
        <p>{{ currentUser.description }}</p>
      </div>
      <div class="notifications-content">
        <div class="filter-buttons">
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
  </div>
</template>

<style scoped>
.page-background {
  background-color: #ffffff;
  min-height: 100vh;
  padding: 20px;
}

.notifications-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.user-profile {
  width: 25%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.user-profile h2 {
  margin: 10px 0 5px;
  font-size: 1.8rem;
  color: #333;
}

.user-profile p {
  color: #666;
  font-size: 1rem;
}

.notifications-content {
  width: 65%;
  display: flex;
  flex-direction: column;
}

.filter-buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
}

.filter-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ff0000;
  border: 1px solid #ff0000;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
}

.filter-buttons button.active {
  background-color: #ff0000;
  color: white;
}

.filter-buttons button:hover {
  background-color: #ffcccc;
}

.notifications-list {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.notification-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ff0000;
}

.notification-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
}

</style>
