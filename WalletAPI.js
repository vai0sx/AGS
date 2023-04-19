// walletAPI.js
import Web3 from 'web3';

let web3;

export const walletAPI = {
  async connectWallet() {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        return true;
      } catch (error) {
        console.error('Error al conectar con la wallet:', error);
        return false;
      }
    } else {
      console.error('No se encontró un proveedor de Ethereum.');
      return false;
    }
  },

  async getAccount() {
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
    return null;
  },
};
