<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <ul>
          <li><router-link to="/aiplist">AIP List</router-link></li>
          <li><router-link to="/delegateevaluation">Delegate Evaluation</router-link></li>
          <li><router-link to="/notificationpanel">Notification Panel</router-link></li>
          <li><router-link to="/walletIntegration">Wallet Integration</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f5f7fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  margin-right: 1rem;
}

.navbar li:last-child {
  margin-right: 0;
}

.router-link-active {
  font-weight: bold;
  color: #007bff;
}

main {
  padding: 2rem;
}
</style>

