<template>
    <div class="wallet-integration">
      <h2>Wallet integration</h2>
      <p>This section is for wallet integration.</p>
      <div v-if="!account">
        <p>No wallet connected.</p>
        <button @click="connectWallet">Connect Wallet</button>
      </div>
      <div v-else>
        <p>Connected to wallet: {{ account }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { walletAPI } from '../services/WalletAPI';
  
  export default {
    name: "WalletIntegration",
    setup() {
      const account = ref(null);
  
      async function connectWallet() {
        console.log("Connecting Wallet...");
        const connected = await walletAPI.connectWallet();
        if (connected) {
          console.log("Wallet connected successfully.");
          account.value = await walletAPI.getAccount();
        } else {
          console.log("Failed to connect wallet.");
        }
      }
  
      return {
        account,
        connectWallet,
      };
    },
  };
  </script>
  
  <style scoped>
  .wallet-integration {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  </style>
  
