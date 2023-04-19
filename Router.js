// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import AIPList from "./components/AIPList.vue";
import DelegateEvaluation from "./components/DelegateEvaluation.vue";
import NotificationPanel from "./components/NotificationPanel.vue";
import WalletIntegration from "./components/WalletIntegration.vue";

const routes = [
  { path: "/aiplist", component: AIPList },
  { path: "/delegateevaluation", component: DelegateEvaluation },
  { path: "/notificationpanel", component: NotificationPanel },
  { path: "/walletintegration", component: WalletIntegration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
