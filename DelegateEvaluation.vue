<template>
  <div class="delegate-evaluation">
    <h2>Delegate Evaluation</h2>
    <DelegateInfo
      v-for="delegate in delegates"
      :key="delegate.address"
      :delegate="delegate"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import DelegateInfo from './DelegateInfo.vue';
import { aaveAPI } from '../services/aaveAPI';

export default {
  name: 'DelegateEvaluation',
  components: {
    DelegateInfo,
  },
  setup() {
    const delegates = ref([]);

    async function fetchDelegates() {
      delegates.value = await aaveAPI.getDelegates();
    }

    onMounted(fetchDelegates);

    return {
      delegates,
    };
  },
};

</script>

<style scoped>
.delegate-evaluation {
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
</style>
