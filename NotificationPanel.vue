<template>
  <div class="notifications">
    <h2>Notifications</h2>
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        <p>{{ notification.message }}</p>
        <button @click="markAsRead(notification.id)">Mark as Read</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { aaveAPI } from '../services/aaveAPI';

export default {
  name: 'NotificationPanel', // Cambia el nombre del componente aquí
  setup() {
    const notifications = ref([]);

    async function fetchNotifications() {
      const proposals = await aaveAPI.getProposals();
      const governanceEvents = await aaveAPI.getGovernanceEvents();

      // Combina las propuestas y eventos de gobernanza en un solo array de notificaciones
      notifications.value = proposals.concat(governanceEvents);
      console.log(notifications.value);
    }

    onMounted(fetchNotifications);

    function markAsRead(notificationId) {
      const notification = notifications.value.find((n) => n.id === notificationId);
      if (notification) {
        notification.read = true;
      }
    }

    return {
      notifications,
      markAsRead,
    };
  },
};

</script>

<style scoped>
.notifications {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.notifications ul {
  list-style-type: none;
  padding: 0;
}

.notifications li {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.notifications button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
